import { join } from "path"

import GeodeIcon from "@/components/GeodeIcon"
import Link from "@/components/ui/link"
import HeroBackground from "@/components/HeroBackground"

import {
  getBlogPosts,
  isPublished,
  sanitizePostPreviewContent,
} from "@/lib/blog"
import { formatDate } from "@/lib/datetime"
import { generateRssFeed, saveRssFeed } from "@/lib/rss"

import { SITE_NAME } from "@/lib/constants"
import { generateClipPath } from "@/styles/clipPaths"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata("Blog", "/blog")

export default async function Blog() {
  const blogPosts = getBlogPosts()
  const publishedPosts = blogPosts.filter(isPublished)

  // generate and save RSS feed
  saveRssFeed(await generateRssFeed(publishedPosts))

  return (
    <div className="flex flex-col items-center gap-16">
      <HeroBackground />

      <article className="mt-16">
        <h1 className="mb-16 text-center font-mono text-6xl font-light">
          Blog
        </h1>

        <section className="flex max-w-screen-md flex-col gap-16">
          {publishedPosts.map(
            ({ frontmatter: { title, publishedTime }, content, slug }) => (
              <Link
                href={join("blog", slug)}
                key={publishedTime}
                className="transition-transform hover:transition-transform motion-safe:hover:scale-[102%]"
              >
                <div
                  className="bg-primary-dark p-8 text-white"
                  style={generateClipPath("TopRight", "large")}
                >
                  <h2 className="font-body text-xl font-semibold tracking-[0.15em]">
                    {title}
                  </h2>
                  <div className="mb-4 text-body-secondary">
                    {formatDate(publishedTime)}
                  </div>
                  <p className="line-clamp-4">
                    {sanitizePostPreviewContent(content)}
                  </p>
                </div>
              </Link>
            )
          )}
          {!publishedPosts.length && (
            <div
              className="bg-primary-dark p-8 text-white"
              style={generateClipPath("TopRight", "large")}
            >
              <h2 className="font-body text-xl font-semibold tracking-[0.15em]">
                No posts yet!
              </h2>
              <p className="line-clamp-4">Come back soon for the latest</p>
            </div>
          )}
        </section>
      </article>

      <GeodeIcon />
    </div>
  )
}
