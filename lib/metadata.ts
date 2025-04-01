import type { Metadata } from "next/types"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants"

function generateMetadata(title?: string, description?: string): Metadata{
  const fullTitle = title ? title + " | " + SITE_NAME : SITE_NAME
  const fullDescription = description || SITE_DESCRIPTION
  const ogImage = `${SITE_URL}/og?title=${encodeURIComponent(fullTitle)}`

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: "website",
      url: SITE_URL,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
  }
}

export { generateMetadata }
