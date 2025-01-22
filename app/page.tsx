import GeodeIcon from "@/components/GeodeIcon"
import HeroBackground from "@/components/HeroBackground"
import Subscribe from "@/components/Subscribe"
import Link from "@/components/ui/link"

import { cn } from "@/lib/utils"
import { getBlogPosts, getHrefFromSlug } from "@/lib/blog"
import { formatDate } from "@/lib/datetime"

import GeodePolygon10 from "@/public/images/geode-polygon-10.svg"
import GeodePolygon4 from "@/public/images/geode-polygon-4.svg"
import GeodePolygon6 from "@/public/images/geode-polygon-6.svg"
import GeodePolygon8 from "@/public/images/geode-polygon-8.svg"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default async function Home() {
  const allPosts = getBlogPosts()
  if (!allPosts.length) throw new Error("No blog posts found")

  const latestPost = allPosts[0]

  const heroItemClasses = cn(
    "self-center",
    "scale-100 hover:scale-110",
    "drop-shadow-[0_0px_16px_rgb(0_0_0_/_0)] hover:drop-shadow-[0_8px_16px_rgb(0_0_0_/_10)]",
    "transition-all hover:transition-all"
  )

  const heroItemFontClasses =
    "font-mono text-[clamp(0.875rem,3.75vw,1.5rem)] lowercase tracking-widest transition-shadow"

  return (
    <div className="flex flex-col items-center gap-16">
      <section className="py-16">
        <HeroBackground className="h-[36rem]" />
        <div className={cn("mx-auto grid grid-cols-3 gap-x-4")}>
          {/* CENTRAL GEODE */}
          <div
            className={cn(
              "pointer-events-none",
              "relative col-start-2 row-span-4 row-start-2 grid",
              "size-[1.1em] place-items-center place-self-center [&>*]:absolute",
              "text-[clamp(8rem,33vw,17rem)]"
            )}
          >
            <GeodePolygon4 className="motion-safe:animate-spin-7-5" />
            <GeodePolygon6 className="motion-safe:animate-spin-15" />
            <GeodePolygon8 className="motion-safe:animate-spin-30" />
            <GeodePolygon10 className="motion-safe:animate-spin-60" />
          </div>
          {/* TOP */}
          <div
            className={cn(
              "col-span-3 row-start-1 place-self-center",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[{ text: "Coordination", className: heroItemFontClasses }]}
            />
          </div>
          {/* LEFT */}
          <div
            className={cn(
              "col-start-1 row-start-2 -me-4 w-fit place-self-end text-end sm:-me-8 md:-me-12",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[
                { text: "Global", className: heroItemFontClasses },
                { text: "Community", className: heroItemFontClasses },
              ]}
              delayInSeconds={1.5}
            />
          </div>
          <div
            className={cn(
              "col-start-1 row-start-3 w-fit place-self-end text-end",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[{ text: "Technology", className: heroItemFontClasses }]}
              delayInSeconds={3}
            />
          </div>
          <div
            className={cn(
              "col-start-1 row-start-4 w-fit place-self-end text-end",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[{ text: "Execution", className: heroItemFontClasses }]}
            />
          </div>
          <div
            className={cn(
              "col-start-1 row-start-5 -me-4 w-fit place-self-end text-end sm:-me-8 md:-me-12",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[{ text: "Grassroots", className: heroItemFontClasses }]}
              delayInSeconds={0.5}
            />
          </div>
          {/* RIGHT */}
          <div
            className={cn(
              "col-start-3 row-start-2 -ms-4 w-fit sm:-ms-12",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[{ text: "Ethereum", className: heroItemFontClasses }]}
              delayInSeconds={3.5}
            />
          </div>
          <div className={cn(heroItemClasses, "col-start-3 row-start-3 w-fit")}>
            <TypewriterEffect
              words={[{ text: "Build", className: heroItemFontClasses }]}
              delayInSeconds={2.5}
            />
          </div>
          <div className={cn(heroItemClasses, "col-start-3 row-start-4 w-fit")}>
            <TypewriterEffect
              words={[
                { text: "Open", className: heroItemFontClasses },
                { text: "Internet", className: heroItemFontClasses },
              ]}
              delayInSeconds={2}
            />
          </div>
          <div
            className={cn(
              "col-start-3 row-start-5 -ms-4 w-fit sm:-ms-12",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[{ text: "Ecosystem", className: heroItemFontClasses }]}
              delayInSeconds={1}
            />
          </div>
          {/* BOTTOM */}
          <div
            className={cn(
              "col-span-3 row-start-6 place-self-center",
              heroItemClasses
            )}
          >
            <TypewriterEffect
              words={[
                { text: "Decentralization", className: heroItemFontClasses },
              ]}
              delayInSeconds={4}
            />
          </div>
        </div>
      </section>

      <section className="flex max-w-screen-sm flex-col items-center tracking-widest">
        <div className="font-mono font-light text-accent">from the blog</div>
        <Link href={getHrefFromSlug(latestPost.slug)} className="">
          <div className="text-2xl font-semibold text-white hover:text-accent-light">
            {latestPost.frontmatter.title}
          </div>
        </Link>
        <div className="text-body-secondary">
          {formatDate(latestPost.frontmatter.publishedTime)}
        </div>
      </section>

      <Subscribe />

      <GeodeIcon />
    </div>
  )
}
