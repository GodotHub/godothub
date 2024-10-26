Push-Location web

pnpm run docs:build

$targetDir = "../../../web/"

Remove-Item -Recurse -Force -Path "$targetDir/zh", "$targetDir/assets"

Remove-Item -Force -Path "$targetDir/404.html", `
    "$targetDir/community.html", `
    "$targetDir/competition.html", `
    "$targetDir/hashmap.json", `
    "$targetDir/index.html", `
    "$targetDir/software.html"

Move-Item .vitepress/dist/* ../../../web/

Remove-Item -Recurse -Force -Path "$targetDir/res"

Pop-Location