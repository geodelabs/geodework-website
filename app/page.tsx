import HeroBackground from "@/components/HeroBackground"
import HomepageHeroContent from "@/components/HomepageHeroContent"
import Link from "@/components/ui/link"
import { Meteors } from "@/components/ui/meteors"
import HeroDock from "@/components/HeroDock"
import { getBlogPosts, getHrefFromSlug } from "@/lib/blog"
import Subscribe from "@/components/Subscribe"

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

      <HeroDock />

      {/* From the blog */}
      <section className="flex flex-col justify-center items-center md:flex-row w-full md:justify-between md:items-end gap-6 px-4">
        <Link
          className="group flex flex-col items-center"
          href={getHrefFromSlug(latestPost.slug)}
        >
          <p className="text-center text-sm font-light text-accent group-hover:text-body">
            read latest &gt;
          </p>
          <p className="text-center font-mono text-lg text-body group-hover:text-accent">
            {latestPost.frontmatter.title}
          </p>
        </Link>
        <Subscribe />
      </section>
    </div>
  )
}
