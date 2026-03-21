# Project task runner

# Core commands
install:
    bun install

dev:
    bun run dev

build:
    bun run build

lint:
    bun run lint

type-check:
    bun run type-check

# Git helpers
status:
    git status

commit message:
    git add -A && git commit -m "{{message}}"

push:
    git push

# Package development
dev-ui:
    cd packages/ui && bun run dev
