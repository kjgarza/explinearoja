import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"

export interface ReportFrontmatter {
  title: string
  description: string
  date: string
  lang: "es" | "en"
  category?: string
}

export interface ReportMeta extends ReportFrontmatter {
  slug: string
}

export interface Report extends ReportMeta {
  contentHtml: string
}

const REPORTS_DIR = path.join(process.cwd(), "src/content/reports")

function parseReportFrontmatter(data: Record<string, unknown>, slug: string): ReportFrontmatter {
  if (!data.title || typeof data.title !== "string") {
    throw new Error(`Report "${slug}" is missing a "title" frontmatter field`)
  }
  if (!data.description || typeof data.description !== "string") {
    throw new Error(`Report "${slug}" is missing a "description" frontmatter field`)
  }
  if (!data.date || typeof data.date !== "string") {
    throw new Error(`Report "${slug}" is missing a "date" frontmatter field`)
  }
  if (data.lang !== "es" && data.lang !== "en") {
    throw new Error(`Report "${slug}" has invalid "lang" — must be "es" or "en"`)
  }
  return {
    title: data.title,
    description: data.description,
    date: data.date,
    lang: data.lang,
    category: typeof data.category === "string" ? data.category : undefined,
  }
}

export async function getReportSlugs(): Promise<string[]> {
  return fs
    .readdirSync(REPORTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export async function getAllReports(): Promise<ReportMeta[]> {
  const slugs = await getReportSlugs()
  const reports = slugs.map((slug) => {
    const source = fs.readFileSync(path.join(REPORTS_DIR, `${slug}.md`), "utf8")
    const { data } = matter(source)
    const frontmatter = parseReportFrontmatter(data as Record<string, unknown>, slug)
    return { slug, ...frontmatter }
  })
  return reports.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getReportBySlug(slug: string): Promise<Report> {
  const filePath = path.join(REPORTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Report not found: ${slug}`)
  }
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)
  const frontmatter = parseReportFrontmatter(data as Record<string, unknown>, slug)

  const processor = remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSanitize)
    .use(rehypeStringify)

  const contentHtml = String(await processor.process(content))

  return { slug, ...frontmatter, contentHtml }
}
