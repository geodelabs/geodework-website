import type { MDXComponents } from "mdx/types"

import GeodeIcon from "@/components/GeodeIcon"

import About from "./content.mdx"

import HeroBackground from "@/components/HeroBackground"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata("About", "/about")

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
