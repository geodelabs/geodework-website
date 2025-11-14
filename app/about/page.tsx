import { Heart } from "lucide-react"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"

import GeodeIcon from "@/components/GeodeIcon"
import HeroBackground from "@/components/HeroBackground"
import Subscribe from "@/components/Subscribe"

import About from "./content.mdx"

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
    <div className="flex flex-col items-center">
      <HeroBackground />
      <article className="mx-auto my-16 max-w-prose [&>p]:mb-12">
        <About components={overrideComponents} />

        <div className="mt-16 flex justify-center">
          <GeodeIcon />
        </div>
      </article>
      <Subscribe />
      <div className="mb-16 mt-8 text-center">
        <p className="text-lg">
          Donate:{" "}
          <Link href="/donate" className="text-accent hover:underline">
            geodelabs.eth
          </Link>{" "}
          <Heart className="inline h-5 w-5 text-red-500" fill="currentColor" />
        </p>
      </div>
    </div>
  )
}
