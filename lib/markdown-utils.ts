// markdown-utils.ts
import fs from "fs"
import path from "path"

import matter from "gray-matter"

import { FrontMatter } from "./types"

const getMarkdownFiles = (dir: string) =>
  fs.readdirSync(dir).filter((file) => path.extname(file) === ".md")

const readMarkdownFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  const matterOutput = matter(rawContent)

  return {
    frontmatter: matterOutput.data as FrontMatter,
    content: matterOutput.content,
  }
}

export const getMarkdownData = (dir: string) => {
  const mdFiles = getMarkdownFiles(dir)
  return mdFiles.map((file) => {
    const { frontmatter, content } = readMarkdownFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      frontmatter,
      slug,
      content,
    }
  })
}
