import HeroBackground from "@/components/HeroBackground"
import HomepageHeroContent from "@/components/HomepageHeroContent"
import { Meteors } from "@/components/ui/meteors"
import Socials from "@/components/Socials"

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-40">
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
      <Socials />
    </div>
  )
}
