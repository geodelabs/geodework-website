import Subscribe from "@/components/Subscribe"
import { cn } from "@/lib/utils"
import BgTexture from "@/public/images/bg-texture.png"
import GeodeGlyph from "@/public/images/geode-glyph.svg"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="absolute inset-0 -z-10 h-[12rem]">
        <Image
          src={BgTexture}
          style={{
            objectPosition: "50% 90%", // Overflow top edge
          }}
          className={cn("mx-auto h-full w-full max-w-screen-xl object-cover")}
          alt=""
        />
      </div>

      <article className="mt-16">
        <h1 className="mb-16 text-center font-mono text-6xl font-light">
          About
        </h1>

        <section className="max-w-prose space-y-12">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. 
          </p>
        </section>
      </article>

      <GeodeGlyph className="text-[2rem]" />

      <Subscribe />
    </div>
  )
}
