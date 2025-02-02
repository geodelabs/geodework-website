import HeroBackground from "@/components/HeroBackground"
import HomepageHeroContent from "@/components/HomepageHeroContent"
import { Meteors } from "@/components/ui/meteors"
import GitHub from "@/components/svgs/github.svg"
import Mail from "@/components/svgs/mail.svg"
import Twitter from "@/components/svgs/twitter.svg"
import Link from "@/components/ui/link"
import { cn } from "@/lib/utils"

export default async function Home() {
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
      {/* Socials */}
      <section className="flex gap-x-2">
        <Link
          aria-label="Email"
          href="mailto:hello@geodework.com"
          className={cn(
            "group grid rotate-0 place-items-center p-4 text-2xl",
            "bg-accent-dark text-white/90 visited:text-white/90",
            "transition-transform hover:rotate-2 hover:bg-body hover:text-accent-dark hover:transition-transform"
          )}
          hideArrow
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 1rem 100%, 0 calc(100% - 1rem))",
          }}
        >
          <Mail className="scale-100 transition-transform group-hover:scale-125 group-hover:transition-transform" />
        </Link>
        <Link
          aria-label="Twitter"
          href="https://x.com/Geodework"
          className={cn(
            "group grid rotate-0 place-items-center p-4 text-2xl",
            "bg-primary-light text-white/90 visited:text-white/90",
            "transition-transform hover:-rotate-2 hover:bg-body hover:text-primary-dark hover:transition-transform"
          )}
          hideArrow
        >
          <Twitter className="scale-100 transition-transform group-hover:scale-125 group-hover:transition-transform" />
        </Link>
        <Link
          aria-label="GitHub"
          href="https://github.com/geodework/"
          className={cn(
            "group grid rotate-0 place-items-center p-4 text-2xl",
            "bg-accent-alt text-white/90 visited:text-white/90",
            "transition-transform hover:rotate-2 hover:bg-body hover:text-accent-alt hover:transition-transform"
          )}
          hideArrow
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 1rem) 0, 100% 1rem, 100% 100%, 0 100%)",
          }}
        >
          <GitHub className="scale-100 transition-transform group-hover:scale-125 group-hover:transition-transform" />
        </Link>
      </section>
    </div>
  )
}
