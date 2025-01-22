"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteors = new Array(number || 20).fill(true)
  const sizeClasses = [
    "size-0.5 before:w-[24rem]",
    "size-1 before:w-[16rem]",
    "size-1.5 before:w-[12rem]",
    "size-2 before:w-[8rem]",
    "size-2.5 before:w-[6rem]",
    "size-3 before:w-[4rem]",
    "size-4 before:w-[3rem]",
    "size-6 before:w-[2rem]",
  ]
  const maxDuration = 60
  const minDuration = 2

  return (
    <>
      {meteors.map((_, idx) => {
        const duration = Math.floor(
          Math.random() * (maxDuration - 2) + minDuration
        )
        const interval = maxDuration / sizeClasses.length
        // Size proportional to duration, inverse to speed
        const sizeTier = Math.floor(duration / interval)

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute left-1/2 top-1/2 rotate-[270deg] rounded-[9999px] bg-accent-dark shadow-[0_0_1px_1px_#ffffff20]",
              "before:absolute before:left-full before:top-1/2 before:h-[1px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              sizeClasses[sizeTier],
              className
            )}
            style={{
              top: 0,
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: duration + "s",
            }}
          ></span>
        )
      })}
    </>
  )
}
