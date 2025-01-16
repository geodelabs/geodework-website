import Subscribe from "@/components/Subscribe"
import { cn } from "@/lib/utils"
import BgTexture from "@/public/images/bg-texture.png"
import GeodeGlyph from "@/public/images/geode-glyph.svg"
import Image from "next/image"

export default function Blog() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="absolute inset-0 -z-10 h-[12rem]">
        <Image
          src={BgTexture}
          priority
          style={{
            objectPosition: "50% 90%", // Overflow top edge
          }}
          className={cn("mx-auto h-full w-full max-w-screen-xl object-cover")}
          alt=""
        />
      </div>

      <article className="mt-16">
        <h1 className="mb-16 text-center font-mono text-6xl font-light">
          Blog
        </h1>

        <section className="max-w-screen-md space-y-16">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-primary-dark p-8">
                <h2 className="font-semibold tracking-[0.15em]">
                  title of the post
                </h2>
                <div className="mb-4 text-body-secondary">January 2025</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. 
                </p>
              </div>
            ))}
        </section>
      </article>

      <GeodeGlyph className="text-[2rem]" />

      <Subscribe />
    </div>
  )
}
