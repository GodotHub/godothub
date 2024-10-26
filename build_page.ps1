Push-Location web
pnpm run docs:build
Move-Item .vitepress/dist ../docs
Pop-Location