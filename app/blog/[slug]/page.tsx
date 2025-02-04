import GeodeIcon from "@/components/GeodeIcon"
import { MarkdownProvider } from "@/components/Markdown/Provider"
import Link from "@/components/ui/link"

import { getBlogPosts, getHrefFromSlug } from "@/lib/blog"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

import HeroBackground from "@/components/HeroBackground"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/datetime"
import { Metadata } from "next"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const slug = (await params).slug
  const post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) notFound()

  const { title, publishedTime, description, image } = post.frontmatter
  const ogImage = !image
    ? `${SITE_URL}/og?title=${encodeURIComponent(title + " | " + SITE_NAME)}`
    : image.startsWith("http")
      ? image
      : `${SITE_URL}/images/${image}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const allPosts = getBlogPosts()
  const slug = (await params).slug
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) notFound()

  const currentIndex = allPosts.indexOf(post)
  const lastIndex = allPosts.length - 1

  // Sorted more recent first; "next" is newer, "prev" is older
  const prevPost =
    currentIndex === lastIndex ? null : allPosts[currentIndex + 1]
  const nextPost = currentIndex === 0 ? null : allPosts[currentIndex - 1]

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
            {post.frontmatter.title}
          </h1>
          <div className="mb-4 text-body-secondary">
            {formatDate(post.frontmatter.publishedTime)}
          </div>
        </div>

        <section>
          <MarkdownProvider>{post.content}</MarkdownProvider>
        </section>

        <GeodeIcon className="mx-auto my-8" />
      </article>

      <nav className="flex gap-2 text-center">
        {prevPost && (
          <Link
            href={getHrefFromSlug(prevPost.slug)}
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 0.5rem 100%, 0 calc(100% - 0.375rem)",
            }}
            className="w-[16ch] bg-accent py-2 text-primary visited:text-primary hover:bg-accent-dark hover:text-primary"
          >
            previous
          </Link>
        )}
        {nextPost && (
          <Link
            href={getHrefFromSlug(nextPost.slug)}
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
