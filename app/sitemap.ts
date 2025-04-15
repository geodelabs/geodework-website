import { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/blog"
import type { BlogPost } from "@/lib/types"
import { GEODEWORK_URL } from "@/lib/constants"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = GEODEWORK_URL

  // Get all blog posts
  const posts = getBlogPosts()

  const frequencyRoutes = {
    "/grant": "monthly" as const,
  }

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/donate",
    "/grant",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      frequencyRoutes[route as keyof typeof frequencyRoutes] ||
      ("yearly" as const),
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog post routes
  const blogRoutes = posts.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.publishedTime),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
