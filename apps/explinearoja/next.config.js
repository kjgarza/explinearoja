const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    { urlPattern: /^https:\/\/fonts/, handler: "StaleWhileRevalidate", options: { cacheName: "google-fonts", expiration: { maxEntries: 10, maxAgeSeconds: 604800 } } },
    { urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, handler: "CacheFirst", options: { cacheName: "images", expiration: { maxEntries: 64, maxAgeSeconds: 86400 } } },
    { urlPattern: /\/api\//, handler: "NetworkFirst", options: { cacheName: "api", networkTimeoutSeconds: 10 } }
  ]
})

const repoName = process.env.NEXT_PUBLIC_REPO_NAME || ""
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repoName.length > 0

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : undefined,
  transpilePackages: ["@repo/utils", "@repo/ui"],
}

module.exports = withPWA(nextConfig)
