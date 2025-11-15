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
    <div className="flex flex-col items-center justify-center gap-20">
      <section className="py-12">
        <Meteors number={20} />
        <Meteors
          number={20}
          className="bg-accent-alt before:from-accent-alt/80"
        />

        <HeroBackground className="h-[36rem] animate-fade-in" />
        <HomepageHeroContent />
      </section>

      <HeroDock />

      <section className="mb-12 flex flex-col items-center justify-center gap-12 px-4 md:mb-0 md:w-full md:flex-row md:items-end md:justify-between">
        <Link
          className="group flex flex-col items-center md:items-start"
          href={getHrefFromSlug(latestPost.slug)}
        >
          <p className="text-left text-sm font-light text-accent group-hover:text-body">
            read latest &gt;
          </p>
          <p className="text-center font-mono text-lg text-body group-hover:text-accent md:text-left">
            {latestPost.frontmatter.title}
          </p>
        </Link>
        <Subscribe />
      </section>
    </div>
  )
}
