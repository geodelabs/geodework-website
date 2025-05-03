import type { Metadata } from "next/types"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants"

// TODO: Change description to be dynamic based on the page
function generateMetadata(title?: string, path?: string): Metadata {
  const fullTitle = title ? title + " | " + SITE_NAME : SITE_NAME
  const fullDescription = SITE_DESCRIPTION
  const ogImage = `/og?title=${encodeURIComponent(fullTitle)}`

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: "website",
      url: path ? path.slice(1) : "/",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [{ url: ogImage }],
    },
  }
}

export { generateMetadata }
