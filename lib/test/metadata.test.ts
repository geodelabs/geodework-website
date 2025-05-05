import { describe, expect,it } from "vitest"

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../constants"
import { generateMetadata } from "../metadata"

describe("generateMetadata", () => {
  it("should generate metadata with default values when no arguments are provided", () => {
    const metadata = generateMetadata()

    expect(metadata.metadataBase?.toString()).toBe(new URL(SITE_URL).toString())
    expect(metadata.title).toBe(SITE_NAME)
    expect(metadata.description).toBe(SITE_DESCRIPTION)
    expect(metadata.openGraph).toEqual({
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      type: "website",
      url: "/",
      images: [{ url: `/og?title=${SITE_NAME}` }],
    })
    expect(metadata.twitter).toEqual({
      card: "summary_large_image",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      images: [{ url: `/og?title=${SITE_NAME}` }],
    })
  })

  it("should generate metadata with custom title and description", () => {
    const customTitle = "Custom Page"
    const path = "/custom-page"
    const metadata = generateMetadata(customTitle, path)

    const expectedTitle = `${customTitle} | ${SITE_NAME}`
    expect(metadata.title).toBe(expectedTitle)
    expect(metadata.description).toBe(SITE_DESCRIPTION)
    expect(metadata.metadataBase?.toString()).toBe(new URL(SITE_URL).toString())
    expect(metadata.openGraph).toEqual({
      title: expectedTitle,
      description: SITE_DESCRIPTION,
      type: "website",
      url: "custom-page",
      images: [{ url: `/og?title=Custom%20Page%20%7C%20${SITE_NAME}` }],
    })
    expect(metadata.twitter).toEqual({
      card: "summary_large_image",
      title: expectedTitle,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: `/og?title=Custom%20Page%20%7C%20${SITE_NAME}`,
        },
      ],
    })
  })
})
