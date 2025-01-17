import fs from "fs"
import { resolve } from "path"

import matter from "gray-matter"

import GeodeIcon from "@/components/GeodeIcon"
import { MarkdownProvider } from "@/components/Markdown/Provider"
import Link from "@/components/ui/link"

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
  if (!fs.existsSync(filepath)) notFound()

  const match = matchFilename(file)

  if (!match) notFound()

  const allPosts = fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((f) => matchFilename(f))
    .sort((a, b) => {
      const dateA = dateToUTCNoonDate(matchFilename(a)![1])
      const dateB = dateToUTCNoonDate(matchFilename(b)![1])
      return dateB.getTime() - dateA.getTime()
    })
  const currentIndex = allPosts.findIndex((f) => f === file)
  const lastIndex = allPosts.length - 1
  const prevIndex = currentIndex === 0 ? null : currentIndex - 1
  const nextIndex = currentIndex === lastIndex ? null : currentIndex + 1

  const markdownContent = fs.readFileSync(filepath, "utf8")
  const { data, content } = matter(markdownContent)

  const { title } = data
  const date = dateToUTCNoonDate(match[1])

  return (
    <div className="flex flex-col items-center gap-16 pb-20">
      <HeroBackground />

      <article
        className="mt-16 w-full max-w-screen-md space-y-16 bg-primary-dark px-6 py-15 sm:px-12 md:px-15"
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

        <section>
          <MarkdownProvider>{content}</MarkdownProvider>
        </section>

        <GeodeIcon className="mx-auto my-8" />
      </article>

      <nav className="flex gap-2 text-center">
        {prevIndex !== null && (
          <Link
            href={`/blog/${allPosts[prevIndex].replace(/\.md$/, "")}`}
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 0.5rem 100%, 0 calc(100% - 0.375rem)",
            }}
            className="w-[16ch] bg-accent py-2 text-primary visited:text-primary hover:bg-accent-dark hover:text-primary"
          >
            previous
          </Link>
        )}
        {nextIndex !== null && (
          <Link
            href={`/blog/${allPosts[nextIndex].replace(/\.md$/, "")}`}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 0.5rem) 0, 100% 0.375rem, 100% 100%, 0 100%)",
            }}
            className="w-[16ch] bg-accent py-2 text-primary visited:text-primary hover:bg-accent-dark hover:text-primary"
          >
            next
          </Link>
        )}
      </nav>
    </div>
  )
}
