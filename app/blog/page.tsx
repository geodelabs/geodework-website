import fs from "fs"
import { resolve } from "path"

import matter from "gray-matter"

import GeodeIcon from "@/components/GeodeIcon"
import Subscribe from "@/components/Subscribe"
import Link from "@/components/ui/link"

import { BLOG_CONTENT_DIR } from "@/lib/constants"
import type { BlogPost } from "@/lib/types"

import HeroBackground from "@/components/HeroBackground"
import {
  dateToUTCNoonDate,
  matchFilename,
  sanitizePostPreviewContent,
} from "@/lib/blog"
import { formatDate } from "@/lib/datetime"

export default async function Blog() {
  if (!fs.existsSync(BLOG_CONTENT_DIR))
    throw new Error(`Missing blog content directory: ${BLOG_CONTENT_DIR}`)

  // Expected filename is in format YYYY-MM-DD-some-title.md after

  const blogPosts: BlogPost[] = []
  for (const file of fs.readdirSync(BLOG_CONTENT_DIR)) {
    const match = matchFilename(file)
    if (!match) {
      console.warn(
        "File doesn't match expected pattern YYYY-MM-DD-post-title.md (skipped):",
        file
      )
      continue
    }

    const markdown = fs.readFileSync(resolve(BLOG_CONTENT_DIR, file), "utf8")
    const {
      data: { title },
      content: markdownContent,
    } = matter(markdown)

    const date = dateToUTCNoonDate(match[1])
    const content = sanitizePostPreviewContent(markdownContent)
    const path = `/blog/${file.replace(/\.md$/, "")}`

    blogPosts.push({ title, date, content, path })
  }

  return (
    <div className="flex flex-col items-center gap-16">
      <HeroBackground />

      <article className="mt-16">
        <h1 className="mb-16 text-center font-mono text-6xl font-light">
          Blog
        </h1>

        <section className="flex max-w-screen-md flex-col gap-16">
          {blogPosts
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map(({ title, content, date, path }, i) => (
              <Link
                href={path}
                key={i}
                className="transition-transform hover:scale-[102%] hover:transition-transform"
              >
                <div
                  className="bg-primary-dark p-8 text-white"
                  style={{
                    clipPath: `polygon(0 0, calc(100% - 1.875rem) 0, 100% 1.875rem, 100% 100%, 0 100%)`,
                  }}
                >
                  <h2 className="font-body text-xl font-semibold tracking-[0.15em]">
                    {title}
                  </h2>
                  <div className="mb-4 text-body-secondary">
                    {formatDate(date)}
                  </div>
                  <p className="line-clamp-4">{content}</p>
                </div>
              </Link>
            ))}
        </section>
      </article>

      <GeodeIcon />

      <Subscribe />
    </div>
  )
}
