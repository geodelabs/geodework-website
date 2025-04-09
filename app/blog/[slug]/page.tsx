import { Metadata } from "next"
import { notFound } from "next/navigation"

import GeodeIcon from "@/components/GeodeIcon"
import { MarkdownProvider } from "@/components/Markdown/Provider"
import Link from "@/components/ui/link"
import HeroBackground from "@/components/HeroBackground"

import { getBlogPosts, getHrefFromSlug } from "@/lib/blog"
import { formatDate } from "@/lib/datetime"

import { EBlogProvider, SITE_NAME, SITE_URL } from "@/lib/constants"

import { generateClipPath } from "@/styles/clipPaths"
import fs from "fs"
import path from "path"
import { BlogProvider } from "@/lib/domain/blog-provider"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({ slug: post.slug }))
}

// TODO: Integrate generateMetadata in @lib/metadata.ts
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

  const blogProvider = new BlogProvider(post.slug, EBlogProvider.LOCAL_ETHEREUM)
  const isBlogPostExists = await blogProvider.getIsBlogPostExists()

  if (!isBlogPostExists) {
    console.error(
      `Blog post with /${post.slug} does not exist in ${EBlogProvider.LOCAL_ETHEREUM}. Please rename the file name to match the slug`
    )
  }

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
    alternates: {
      canonical: blogProvider.getBlogPostUrl(),
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

  // Read the footer content
  const footerPath = path.join(process.cwd(), "app/blog/content/footer.md")
  const footerContent = fs.readFileSync(footerPath, "utf-8")

  return (
    <div className="flex flex-col items-center gap-16 pb-20">
      <HeroBackground />

      <article
        className="mt-16 w-full max-w-screen-md space-y-16 bg-primary-dark px-6 py-15 sm:px-12 md:px-15"
        style={generateClipPath("TopRight", "large")}
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

        <section>
          <MarkdownProvider>{footerContent}</MarkdownProvider>
        </section>

        <GeodeIcon className="mx-auto my-8" />
      </article>

      <nav className="flex gap-2 text-center">
        {prevPost && (
          <Link
            href={getHrefFromSlug(prevPost.slug)}
            style={generateClipPath("BottomLeft", "small")}
            className="w-[16ch] bg-accent py-2 text-primary visited:text-primary hover:bg-accent-dark hover:text-primary"
          >
            previous
          </Link>
        )}
        {nextPost && (
          <Link
            href={getHrefFromSlug(nextPost.slug)}
            style={generateClipPath("TopRight", "small")}
            className="w-[16ch] bg-accent py-2 text-primary visited:text-primary hover:bg-accent-dark hover:text-primary"
          >
            next
          </Link>
        )}
      </nav>
    </div>
  )
}
