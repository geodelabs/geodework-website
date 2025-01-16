import GeodeIcon from "@/components/GeodeIcon"
import HeroBackground from "@/components/HeroBackground"
import Subscribe from "@/components/Subscribe"

import GeodePolygon10 from "@/public/images/geode-polygon-10.svg"
import GeodePolygon4 from "@/public/images/geode-polygon-4.svg"
import GeodePolygon6 from "@/public/images/geode-polygon-6.svg"
import GeodePolygon8 from "@/public/images/geode-polygon-8.svg"

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="py-16">
        <HeroBackground className="h-[36rem]" />
        <div className="mx-auto grid scale-100 grid-cols-3 font-mono text-[3vw] lowercase tracking-widest transition-transform md:text-[2vw] lg:text-[1vw] [&>div:hover]:scale-105 [&>div:hover]:transition-transform [&>div]:self-center">
          {/* CENTRAL GEODE */}
          <div className="pointer-events-none relative col-start-2 row-span-4 row-start-2 grid !size-[300px] place-items-center place-self-center [&>*]:absolute">
            <GeodePolygon4 className="text-[7rem] motion-safe:animate-spin-cw-7-5 sm:text-[10rem] md:text-[17rem]" />
            <GeodePolygon6 className="text-[7rem] motion-safe:animate-spin-ccw-15 sm:text-[10rem] md:text-[17rem]" />
            <GeodePolygon8 className="text-[7rem] motion-safe:animate-spin-cw-30 sm:text-[10rem] md:text-[17rem]" />
            <GeodePolygon10 className="text-[7rem] motion-safe:animate-spin-ccw-60 sm:text-[10rem] md:text-[17rem]" />
          </div>
          {/* TOP */}
          <div className="col-span-3 row-start-1 place-self-center">
            Coordination
          </div>
          {/* LEFT */}
          <div className="col-start-1 row-start-2 -me-12 w-fit place-self-end">
            Global Community
          </div>
          <div className="col-start-1 row-start-3 w-fit place-self-end">
            Technology
          </div>
          <div className="col-start-1 row-start-4 w-fit place-self-end">
            Execution
          </div>
          <div className="col-start-1 row-start-5 -me-12 w-fit place-self-end">
            Grassroots
          </div>
          {/* RIGHT */}
          <div className="col-start-3 row-start-2 -ms-12 w-fit">Ethereum</div>
          <div className="col-start-3 row-start-3 w-fit">Build</div>
          <div className="col-start-3 row-start-4 w-fit">Open Internet</div>
          <div className="col-start-3 row-start-5 -ms-12 w-fit">Ecosystem</div>
          {/* BOTTOM */}
          <div className="col-span-3 row-start-6 place-self-center">
            Decentralization
          </div>
        </div>
      </div>

      <div className="flex max-w-screen-sm flex-col items-center tracking-widest">
        <div className="font-mono font-light text-accent">from the blog</div>
        <div className="text-2xl font-semibold">title of the post</div>
        <div className="text-body-secondary">January 2025</div>
      </div>

      <Subscribe />

      <GeodeIcon />
    </div>
  )
}
