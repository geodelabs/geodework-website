import type { MDXComponents } from "mdx/types"

import GeodeIcon from "@/components/GeodeIcon"

import About from "./content.mdx"

import HeroBackground from "@/components/HeroBackground"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"
import type { Metadata } from "next/types"

const title = "About " + SITE_NAME
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

const overrideComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-16 text-center font-mono text-6xl font-light">
      {children}
    </h1>
  ),
}

export default function AboutPage() {
  return (
    <>
      <HeroBackground />
      <article className="mx-auto mt-16 max-w-prose [&>p]:mb-12">
        <About components={overrideComponents} />

        <div className="mt-16 flex justify-center">
          <GeodeIcon />
        </div>
      </article>
    </>
  )
}
