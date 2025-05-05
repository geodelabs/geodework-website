import fs from "fs"
import path from "path"

import matter from "gray-matter"
import removeMd from "remove-markdown"

import { BLOG_PATH, MAX_WORDS_PER_POST_PREVIEW } from "@/lib/constants"

import type { BlogPost,FrontMatter } from "./types"

export const getSlicedContent = (content: string, maxLength: number = 125) => {
  const SLICED_TEXT = content.split(" ").slice(0, maxLength).join(" ")

  if (content.includes("\n#") && content.indexOf("\n#") >= 0)
    return content
      .slice(0, content.indexOf("\n#"))
      .split(" ")
      .slice(0, maxLength)
      .join(" ")
  if (content.includes("<h") && content.indexOf("<h") >= 0)
    return content
      .slice(0, content.indexOf("<h"))
      .split(" ")
      .slice(0, maxLength)
      .join(" ")

  // if content has no headings, cut the text to 125 words max (END = 125 by default)
  return SLICED_TEXT
}

export const sanitizePostPreviewContent = (content: string): string => {
  const mdRemoved = removeMd(content)
  const truncatedContent = getSlicedContent(mdRemoved)
  const wordArray: string[] = truncatedContent.split(" ")
  const isTooLong: boolean = wordArray.length > MAX_WORDS_PER_POST_PREVIEW
  const sliceEnd: number = isTooLong
    ? MAX_WORDS_PER_POST_PREVIEW
    : wordArray.length
  return wordArray.slice(0, sliceEnd).join(" ") + (isTooLong ? "..." : "")
}

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

const getMarkdownData = (dir: string) => {
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

export const isPublished = (post: BlogPost) => {
  const now = new Date()
  const publishedTime = new Date(post.frontmatter.publishedTime)
  return publishedTime <= now
}

export const getBlogPosts = (): BlogPost[] => {
  const allPosts = getMarkdownData(
    path.join(process.cwd(), "app", "blog", "content")
  )
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedTime).getTime() -
      new Date(a.frontmatter.publishedTime).getTime()
  )

  const published = sortedPosts.filter(isPublished)

  // Most recent post in [0] position, old posts at end
  return published
}

export const getHrefFromSlug = (slug: string) => path.join(BLOG_PATH, slug)
