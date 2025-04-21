import HeroBackground from "@/components/HeroBackground"
import React from "react"

import { generateMetadata } from "@/lib/metadata"
import GrantsMain from "@/components/GrantsMain"

export const metadata = generateMetadata("Grants")

export default function Grant() {
  return (
    <>
      <HeroBackground />
      <div className="flex flex-col items-center gap-16">
        <article className="mt-12 sm:mt-16 md:max-w-5xl">
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
    </>
  )
}
