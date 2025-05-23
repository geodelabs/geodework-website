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

export const getBlogMarkdownData = (dir: string) => {
  const mdFiles = getMarkdownFiles(dir)
  return mdFiles.map((file) => {
    const { frontmatter, content } = readMarkdownFile(path.join(dir, file))

    if (!(frontmatter.title && frontmatter.publishedTime))
      throw new Error(
        `Move the non-blog format file ${file} out of ${dir}. It's missing title or publishedTime.`
      )

    const slug = path.basename(file, path.extname(file))

    return {
      frontmatter,
      slug,
      content,
    }
  })
}
