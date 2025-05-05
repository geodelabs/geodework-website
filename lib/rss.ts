import fs from "fs"
import { resolve } from "path"

import { Feed, type Item } from "feed"
import removeMd from "remove-markdown"

import { BLOG_DESCRIPTION, BLOG_NAME, SITE_NAME } from "@/lib/constants"

import { BLOG_PATH, PUBLIC_DIR, SITE_URL } from "./constants"
import type { BlogPost } from "./types"
import { normalizeUrl } from "./url"

export const generateRssFeed = async (posts: BlogPost[]): Promise<Feed> => {
  const date = new Date()
  const feed = new Feed({
    title: BLOG_NAME,
    description: BLOG_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/og?title=${encodeURIComponent(BLOG_NAME)}`,
    favicon: `${SITE_URL}/images/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}`,
    updated: date,
    feedLinks: {
      rss2: `${SITE_URL}/rss/feed.xml`,
    },
  })

  posts.forEach(
    ({
      frontmatter: {
        title,
        publishedTime,
        description: frontmatterDescription,
        image: imagePath,
      },
      content,
      slug,
    }) => {
      const link = new URL(resolve(BLOG_PATH, slug), SITE_URL).toString()
      const image = (() => {
        if (!imagePath) return

        try {
          const { origin, pathname } = normalizeUrl(imagePath)
          const pathComponents = pathname
            .split("/")
            .filter(Boolean)
            .map((pathComponent) => encodeURIComponent(pathComponent))
          return new URL(resolve(...pathComponents), origin).toString()
        } catch (e) {
          console.warn("Could not sanitize image url, skipping: ", imagePath)
        }
      })()

      const author = [{ name: SITE_NAME }]
      const MAX_WORDS = 50
      const trimmedContent = removeMd(content.slice(0, MAX_WORDS * 10))
      const trimmedContentArray = trimmedContent
        .replace(/\n/gm, " ")
        .trim()
        .split(" ")
      const sliceEnd =
        trimmedContentArray.length < MAX_WORDS
          ? trimmedContentArray.length
          : MAX_WORDS
      const description =
        frontmatterDescription ||
        trimmedContentArray.slice(0, sliceEnd).join(" ").concat("...")

      const item = {
        title,
        id: link,
        link,
        date: new Date(publishedTime),
        description,
        author,
        contributor: author,
        published: new Date(publishedTime),
        guid: link,
      } as Item

      if (image) {
        item.image = image
      }

      feed.addItem(item)
    }
  )
  return feed
}

export const saveRssFeed = (feed: Feed) => {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
  fs.writeFileSync(`${PUBLIC_DIR}/feed.xml`, feed.rss2())
}
