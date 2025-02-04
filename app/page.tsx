import HeroBackground from "@/components/HeroBackground"
import HomepageHeroContent from "@/components/HomepageHeroContent"
import { Meteors } from "@/components/ui/meteors"
import Subscribe from "@/components/Subscribe"
import Link from "@/components/ui/link"

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

        <HeroBackground className="h-[36rem]" />
        <HomepageHeroContent />
      </section>

      {/* From the blog */}
      <section className="-mt-8 max-w-screen-sm flex-col-reverse items-center gap-1 p-8 tracking-widest">
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
      </section>

      {/* Subscribe to newsletter */}
      <Subscribe />
    </div>
  )
}
