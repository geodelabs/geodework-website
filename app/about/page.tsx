import type { Metadata } from "next/types"

import GeodeIcon from "@/components/GeodeIcon"
import HeroBackground from "@/components/HeroBackground"
import Subscribe from "@/components/Subscribe"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants"
import Socials from "@/components/Socials"

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

export default function About() {
  return (
    <div className="flex flex-col items-center gap-16">
      <HeroBackground />

      <article className="mt-16">
        <h1 className="mb-16 text-center font-mono text-6xl font-light">
          About
        </h1>

        <section className="max-w-prose space-y-12">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. 
          </p>
        </section>
      </article>

      <Socials />

      <GeodeIcon />

      <Subscribe />
    </div>
  )
}
