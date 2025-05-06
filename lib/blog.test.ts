import { describe, expect, it } from "vitest"

import { hasUniquePublishedDates } from "./blog"

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
})
