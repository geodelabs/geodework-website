import { cn } from "@/lib/utils"

import HeroTypewriterEffect, {
  type HeroTypewriterItem,
} from "./HeroTypewriterEffect"

import GeodePolygon4 from "@/public/images/geode-polygon-4.svg"
import GeodePolygon6 from "@/public/images/geode-polygon-6.svg"
import GeodePolygon8 from "@/public/images/geode-polygon-8.svg"
import GeodePolygon10 from "@/public/images/geode-polygon-10.svg"

const HomepageHeroContent = () => {
  const heroItems: HeroTypewriterItem[] = [
    {
      label: "Global",
      delayInSeconds: 0,
      className: "col-span-3 row-start-1 place-self-center",
    },
    {
      label: "Community",
      delayInSeconds: 1.5,
      className:
        "col-start-1 row-start-2 -me-4 w-fit place-self-end text-end sm:-me-8 md:-me-12",
    },
    {
      label: "Technology",
      delayInSeconds: 3.5,
      className: "col-start-1 row-start-3 w-fit place-self-end text-end",
    },
    {
      label: "Execution",
      delayInSeconds: 3,
      className: "col-start-1 row-start-4 w-fit place-self-end text-end",
    },
    {
      label: "Grassroots",
      delayInSeconds: 0.5,
      className:
        "col-start-1 row-start-5 -me-4 w-fit place-self-end text-end sm:-me-8 md:-me-12",
    },
    {
      label: "Ethereum",
      delayInSeconds: 4,
      className: "col-start-3 row-start-2 -ms-4 w-fit sm:-ms-12",
    },
    {
      label: "Build",
      delayInSeconds: 2.5,
      className: "col-start-3 row-start-3 w-fit",
    },
    {
      label: "Open Internet",
      delayInSeconds: 2,
      className: "col-start-3 row-start-4 w-fit",
    },
    {
      label: "Ecosystem",
      delayInSeconds: 1,
      className: "col-start-3 row-start-5 -ms-4 w-fit sm:-ms-12",
    },
    {
      label: "Decentralization",
      delayInSeconds: 4.5,
      className: "col-span-3 row-start-6 place-self-center",
    },
  ]

  return (
    <div className={cn("mx-auto grid grid-cols-3 gap-x-4")}>
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

      {/* HERO WORDS USING TYPEWRITER EFFECT */}
      <HeroTypewriterEffect items={heroItems} />
    </div>
  )
}

export default HomepageHeroContent
