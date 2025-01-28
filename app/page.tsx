import GeodeIcon from "@/components/GeodeIcon"
import HeroBackground from "@/components/HeroBackground"
import HomepageHeroContent from "@/components/HomepageHeroContent"
import Subscribe from "@/components/Subscribe"
import Link from "@/components/ui/link"
import { Meteors } from "@/components/ui/meteors"

import { getBlogPosts, getHrefFromSlug } from "@/lib/blog"
import { formatDate } from "@/lib/datetime"

export default async function Home() {
  const allPosts = getBlogPosts()
  if (!allPosts.length) throw new Error("No blog posts found")

  const latestPost = allPosts[0]

  return (
    <div className="flex flex-col items-center gap-16">
      {/* Hero */}
      <section className="py-16">
        <Meteors number={20} />
        <Meteors
          number={20}
          className="bg-accent-alt before:from-accent-alt/80"
        />

        <HeroBackground className="h-[36rem]" />
        <HomepageHeroContent />
      </section>

      {/* From the blog */}
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

      {/* Subscribe */}
      <Subscribe />
    </div>
  )
}
