import React from "react"

import GrantsMain from "@/components/GrantsMain"
import HeroBackground from "@/components/HeroBackground"
import Subscribe from "@/components/Subscribe"
import Link from "next/link"
import { Heart } from "lucide-react"

import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata("Grants", "/grants")

export default function Grant() {
  return (
    <>
      <HeroBackground />
      <div className="flex flex-col items-center gap-16">
        <article className="my-12 sm:my-16 md:max-w-5xl">
          <h1 className="mb-8 text-center font-mono text-6xl font-light">
            Grants
          </h1>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <p className="text-lg">
              We facilitate ecosystem grants with the goal to support Ethereum
              and open Internet innovation. Learn about the excellent projects,
              builders, and communities we support below.
            </p>
          </div>
          <GrantsMain />
        </article>
        
      </div>
      <div className="flex flex-col items-center">
        <Subscribe />
        <div className="mt-8 mb-16 text-center">
          <p className="text-lg">
            Donate: <Link href="/donate" className="text-accent hover:underline">geodelabs.eth</Link>{" "}
            <Heart className="inline h-5 w-5 text-red-500" fill="currentColor" />
          </p>
        </div>
      </div>
    </>
  )
}
