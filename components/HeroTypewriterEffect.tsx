import { Fragment } from "react"

import { TypewriterEffect } from "@/components/ui/typewriter-effect"

import { cn } from "@/lib/utils"

const containerClassName = cn(
  "self-center leading-tight",
  "scale-100 motion-safe:hover:scale-110",
  "drop-shadow-[0_0px_16px_rgb(0_0_0_/_0)] hover:drop-shadow-[0_8px_16px_rgb(0_0_0_/_10)]",
  "transition-all hover:transition-all"
)

const fontClassName =
  "font-mono text-[clamp(0.875rem,3.75vw,1.5rem)] lowercase tracking-widest transition-shadow motion-reduce:hidden"

const MotionReducedFallback = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(containerClassName, fontClassName, className)}>
      {children}
    </div>
  )
}

export type HeroTypewriterItem = {
  label: string
  delayInSeconds: number
  className: string
}

type HeroTypewriterEffectProps = {
  items: HeroTypewriterItem[]
}

const HeroTypewriterEffect = ({ items }: HeroTypewriterEffectProps) => {
  return (
    <>
      {items.map(({ label, delayInSeconds, className }) => {
        const words = label
          .split(" ")
          .map((text) => ({ text, className: fontClassName }))

        return (
          <Fragment key={label}>
            <div className={cn("relative flex", containerClassName, className)}>
              {/* Maintains vertical space while animation is writing in */}
              <MotionReducedFallback className="invisible inline-block h-fit w-0 motion-reduce:visible">
                {label}
              </MotionReducedFallback>

              <TypewriterEffect
                className="inline-block"
                words={words}
                delayInSeconds={delayInSeconds}
              />
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default HeroTypewriterEffect
