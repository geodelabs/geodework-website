import { Fragment } from "react"

import { TypewriterEffect } from "@/components/ui/typewriter-effect"

import { cn } from "@/lib/utils"

import GeodePolygon10 from "@/public/images/geode-polygon-10.svg"
import GeodePolygon4 from "@/public/images/geode-polygon-4.svg"
import GeodePolygon6 from "@/public/images/geode-polygon-6.svg"
import GeodePolygon8 from "@/public/images/geode-polygon-8.svg"

const items: {
  label: string
  delayInSeconds: number
  className: string
}[] = [
  {
    label: "Coordination",
    delayInSeconds: 0,
    className: "col-span-3 row-start-1 place-self-center",
  },
  {
    label: "Global Community",
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

const heroItemContainerClasses = cn(
  "self-center leading-tight",
  "scale-100 motion-safe:hover:scale-110",
  "drop-shadow-[0_0px_16px_rgb(0_0_0_/_0)] hover:drop-shadow-[0_8px_16px_rgb(0_0_0_/_10)]",
  "transition-all hover:transition-all"
)

const heroItemFontClasses =
  "font-mono text-[clamp(0.875rem,3.75vw,1.5rem)] lowercase tracking-widest transition-shadow"

const Fallback = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(heroItemContainerClasses, heroItemFontClasses, className)}
    >
      {children}
    </div>
  )
}

const HomepageHeroContent = () => (
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

    {items.map(({ label, delayInSeconds, className }) => {
      const words = label
        .split(" ")
        .map((text) => ({ text, className: heroItemFontClasses }))

      return (
        <Fragment key={label}>
          <div
            className={cn(
              "relative flex motion-reduce:hidden",
              heroItemContainerClasses,
              className
            )}
          >
            {/* Maintains vertical space while animation is writing in */}
            <Fallback className="invisible inline-block h-fit w-0">
              {label}
            </Fallback>

            <TypewriterEffect
              className="inline-block"
              words={words}
              delayInSeconds={delayInSeconds}
            />
          </div>
          <Fallback className="hidden motion-reduce:inline-block">
            {label}
          </Fallback>
        </Fragment>
      )
    })}
  </div>
)

export default HomepageHeroContent
