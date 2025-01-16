import HomepageHero from "@/components/Hero"
import Subscribe from "@/components/Subscribe"
import GeodeGlyph from "@/public/images/geode-glyph.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <HomepageHero className="py-16" />

      <div className="flex max-w-screen-sm flex-col items-center tracking-widest">
        <div className="font-mono font-light text-accent">from the blog</div>
        <div className="text-2xl font-semibold">title of the post</div>
        <div className="text-body-secondary">January 2025</div>
      </div>

      <Subscribe />

      <GeodeGlyph className="text-[2rem]" />
    </div>
  )
}
