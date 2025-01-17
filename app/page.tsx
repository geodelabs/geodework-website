import GeodeIcon from "@/components/GeodeIcon"
import HeroBackground from "@/components/HeroBackground"
import Subscribe from "@/components/Subscribe"
import { cn } from "@/lib/utils"

import GeodePolygon10 from "@/public/images/geode-polygon-10.svg"
import GeodePolygon4 from "@/public/images/geode-polygon-4.svg"
import GeodePolygon6 from "@/public/images/geode-polygon-6.svg"
import GeodePolygon8 from "@/public/images/geode-polygon-8.svg"

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="py-16">
        <HeroBackground className="h-[36rem]" />
        <div
          className={cn(
            "mx-auto grid grid-cols-3 [&>div]:self-center",
            "font-mono text-[clamp(0.875rem,3vw,1.5rem)] lowercase tracking-widest",
            "scale-100 transition-transform [&>div:hover]:scale-105 [&>div:hover]:transition-transform"
          )}
        >
          {/* CENTRAL GEODE */}
          <div
            className={cn(
              "pointer-events-none",
              "relative col-start-2 row-span-4 row-start-2 grid",
              "size-[1.1em] place-items-center place-self-center [&>*]:absolute",
              "text-[clamp(8rem,33vw,17rem)]"
            )}
          >
            <GeodePolygon4 className="motion-safe:animate-spin-7-5" />
            <GeodePolygon6 className="motion-safe:animate-spin-15" />
            <GeodePolygon8 className="motion-safe:animate-spin-30" />
            <GeodePolygon10 className="motion-safe:animate-spin-60" />
          </div>
          {/* TOP */}
          <div className="col-span-3 row-start-1 place-self-center">
            Coordination
          </div>
          {/* LEFT */}
          <div className="col-start-1 row-start-2 -me-4 w-fit place-self-end text-end sm:-me-12">
            Global Community
          </div>
          <div className="col-start-1 row-start-3 w-fit place-self-end text-end">
            Technology
          </div>
          <div className="col-start-1 row-start-4 w-fit place-self-end text-end">
            Execution
          </div>
          <div className="col-start-1 row-start-5 -me-4 w-fit place-self-end text-end sm:-me-12">
            Grassroots
          </div>
          {/* RIGHT */}
          <div className="col-start-3 row-start-2 -ms-4 w-fit sm:-ms-12">
            Ethereum
          </div>
          <div className="col-start-3 row-start-3 w-fit">Build</div>
          <div className="col-start-3 row-start-4 w-fit">Open Internet</div>
          <div className="col-start-3 row-start-5 -ms-4 w-fit sm:-ms-12">
            Ecosystem
          </div>
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
