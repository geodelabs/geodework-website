import HeroBackground from "@/components/HeroBackground"
import HeroDock from "@/components/HeroDock"
import HomepageHeroContent from "@/components/HomepageHeroContent"
import Subscribe from "@/components/Subscribe"
import Link from "@/components/ui/link"
import { Meteors } from "@/components/ui/meteors"

import { getBlogPosts, getHrefFromSlug } from "@/lib/blog"

export default async function Home() {
  const allPosts = getBlogPosts()
  if (!allPosts.length) throw new Error("No blog posts found")

  const latestPost = allPosts[0]

  return (
    <div className="flex flex-col items-center gap-20">
      {/* Hero */}
      <section className="py-12">
        <Meteors number={20} />
        <Meteors
          number={20}
          className="bg-accent-alt before:from-accent-alt/80"
        />

        <HeroBackground className="h-[36rem] animate-fade-in" />
        <HomepageHeroContent />
      </section>

      {/* <HeroDock /> */}

      {/* From the blog */}
      <section className="flex w-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:items-end md:justify-between">
        <Link
          className="group flex flex-col items-start"
          href={getHrefFromSlug(latestPost.slug)}
        >
          <p className="text-left text-sm font-light text-accent group-hover:text-body">
            read latest &gt;
          </p>
          <p className="text-left font-mono text-lg text-body group-hover:text-accent">
            {latestPost.frontmatter.title}
          </p>
        </Link>
        <Subscribe />
      </section>
    </div>
  )
}
