import { describe, expect, it, vi } from "vitest"

import { getBlogPosts, hasUniquePublishedDates } from "./blog"
import * as markdownUtils from "./markdown-utils"

describe("hasUniquePublishedDates", () => {
  it("should return true if no duplicate of published date", () => {
    const isUnique = hasUniquePublishedDates([
      {
        frontmatter: {
          publishedTime: "2025-01-01 12:00:00 Z-00:00",
          title: "test1",
        },
        slug: "test1",
        content: "test1",
      },
      {
        frontmatter: {
          publishedTime: "2025-01-01 13:00:00 Z-00:00",
          title: "test2",
        },
        slug: "test2",
        content: "test2",
      },
    ])
    expect(isUnique).toBe(true)
  })

  it("should return false if duplicate of published date", () => {
    const isUnique = hasUniquePublishedDates([
      {
        frontmatter: {
          publishedTime: "2025-01-01 12:00:00 Z-00:00",
          title: "test1",
        },
        slug: "test1",
        content: "test1",
      },
      {
        frontmatter: {
          publishedTime: "2025-01-01 12:00:00 Z-00:00",
          title: "test2",
        },
        slug: "test2",
        content: "test2",
      },
    ])
    expect(isUnique).toBe(false)
  })

  it("should return the correct blog posts", () => {
    vi.spyOn(markdownUtils, "getMarkdownData").mockReturnValue([
      {
        frontmatter: {
          title: "Article-1",
          publishedTime: "2025-03-20 12:00:00 Z-00:00",
        },
        slug: "taiwan-ethereum-ecosystem-overview",
        content: "Content A",
      },
      {
        frontmatter: {
          title: "Article-2",
          publishedTime: "2025-03-21 00:00:00 Z-00:00",
        },
        slug: "local-ethereum-4",
        content: "Content G",
      },
      {
        frontmatter: {
          title: "Future Article",
          publishedTime: "2420-04-20 16:20:00 Z-00:00",
        },
        slug: "example-post",
        content: "Content H",
      },
    ])
    const posts = getBlogPosts()
    // expect(posts).toHaveLength(2)
    expect(posts.map((p) => p.frontmatter.title)).toEqual([
      "Article-2",
      "Article-1",
      // "Future Article",
    ])
    // expect(posts[0].frontmatter.title).toBe("First")
    // expect(posts[1].frontmatter.title).toBe("Second")
    // expect(posts.find((p) => p.frontmatter.title === "Third")).toBeUndefined()
  })
})
