import type { Metadata } from "next/types"
import { join } from "path"

import GeodeIcon from "@/components/GeodeIcon"
import Link from "@/components/ui/link"

import HeroBackground from "@/components/HeroBackground"
import { getBlogPosts } from "@/lib/blog"
import { formatDate } from "@/lib/datetime"
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants"

const title = SITE_NAME + " Blog"
const description = SITE_DESCRIPTION
const ogImage = `${SITE_URL}/og?title=${encodeURIComponent(title)}`

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: SITE_URL,
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
}

export default async function Blog() {
  const blogPosts = getBlogPosts()

  return (
    <div className="flex flex-col items-center gap-16">
      <HeroBackground />

      <article className="mt-16">
        <h1 className="mb-16 text-center font-mono text-6xl font-light">
          Blog
        </h1>

        <section className="flex max-w-screen-md flex-col gap-16">
          {blogPosts.map(
            ({ frontmatter: { title, publishedTime }, content, slug }) => (
              <Link
                href={join("blog", slug)}
                key={publishedTime}
                className="transition-transform hover:transition-transform motion-safe:hover:scale-[102%]"
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
                    {formatDate(publishedTime)}
                  </div>
                  <p className="line-clamp-4">{content}</p>
                </div>
              </Link>
            )
          )}
        </section>
      </article>

      <GeodeIcon />
    </div>
  )
}
