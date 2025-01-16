import fs from "fs"
import { resolve } from "path"

import matter from "gray-matter"

import GeodeIcon from "@/components/GeodeIcon"
import { MarkdownProvider } from "@/components/Markdown/Provider"
import Subscribe from "@/components/Subscribe"

import { dateToUTCNoonDate, matchFilename } from "@/lib/blog"
import { BLOG_CONTENT_DIR } from "@/lib/constants"

import HeroBackground from "@/components/HeroBackground"
import { notFound } from "next/navigation"

export default async function BlogPost({
  params,
}: {
  params: Promise<{ post: string }>
}) {
  const { post } = await params
  const file = post + ".md"
  const filepath = resolve(BLOG_CONTENT_DIR, file)

  if (!fs.existsSync(BLOG_CONTENT_DIR))
    throw new Error(`Missing blog content directory: ${BLOG_CONTENT_DIR}`)

  // Expected filename is in format YYYY-MM-DD-some-title.md; used to match URL
  if (!fs.existsSync(filepath)) throw new Error(`Missing blog post: ${post}`)

  const match = matchFilename(file)

  if (!match) notFound()

  const markdownContent = fs.readFileSync(filepath, "utf8")
  const { data, content } = matter(markdownContent)

  const { title } = data
  const date = dateToUTCNoonDate(match[1])

  return (
    <div className="flex flex-col items-center gap-16 pb-20">
      <HeroBackground />

      <article
        className="mt-16 w-full max-w-screen-md bg-primary-dark p-[3.75rem]"
        style={{
          clipPath: `polygon(0 0, calc(100% - 1.875rem) 0, 100% 1.875rem, 100% 100%, 0 100%)`,
        }}
      >
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-widest">
            {title}
          </h1>
          <div className="mb-4 text-body-secondary">
            {date.toLocaleDateString(navigator?.language || "en", {
              timeZone: "UTC",
              dateStyle: "long",
            })}
          </div>
        </div>

        <MarkdownProvider>{content}</MarkdownProvider>

        <GeodeIcon className="mx-auto my-8" />
      </article>
    </div>
  )
}
