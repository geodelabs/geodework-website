import React from "react"
import { Heart } from "lucide-react"
import Link from "next/link"

import { generateClipPath } from "@/styles/clipPaths"

const HeroDock = () => {
  const clipPathStyle = generateClipPath(["BottomLeft", "TopRight"])
  const bottomLeftClipPath = generateClipPath("BottomLeft")

  return (
    <div
      className="relative bg-white p-0.5 font-mono text-sm font-semibold sm:p-1 sm:text-base md:text-lg lg:text-xl"
      style={clipPathStyle}
    >
      <div
        className="flex items-stretch overflow-visible bg-primary"
        style={clipPathStyle}
      >
        <div className="relative flex-1" style={bottomLeftClipPath}>
          <button
            className="group relative h-full w-full px-3 py-2 transition-all sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8"
            style={bottomLeftClipPath}
          >
            <span className="relative z-10 block transition-colors group-hover:text-primary">
              <Link href="/newsletter">Newsletter</Link>
            </span>
            <div
              className="absolute inset-[2px] bg-white opacity-0 transition-opacity group-hover:opacity-100"
              style={bottomLeftClipPath}
            />
          </button>
          <div
            className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors group-hover:border-primary"
            style={bottomLeftClipPath}
          />
        </div>
        <div className="w-0.5 flex-shrink-0 bg-white sm:w-1" />
        <div className="relative isolate flex-1">
          <button className="h-full w-full border-2 border-transparent px-3 py-2 transition-colors hover:border-primary hover:bg-white hover:text-primary sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8">
            <Link href="https://shop.geode.build/">Shop</Link>
          </button>
        </div>
        <div className="w-0.5 flex-shrink-0 bg-white sm:w-1" />
        <div
          className="relative flex-1 bg-accent"
          style={generateClipPath("TopRight")}
        >
          <button
            className="group relative h-full w-full px-3 py-2 transition-all sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8"
            style={generateClipPath("TopRight")}
          >
            <span className="relative z-10 block text-primary transition-colors group-hover:text-primary">
              <Link
                href="/donate"
                className="mt-0.5 inline-flex items-center justify-center sm:mt-1"
              >
                <Heart className="mr-1 h-3 w-3 transition-all group-hover:fill-primary sm:mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Donate
              </Link>
            </span>
            <div
              className="absolute inset-[2px] bg-white opacity-0 transition-opacity group-hover:opacity-100"
              style={generateClipPath("TopRight")}
            />
          </button>
          <div
            className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors group-hover:border-accent"
            style={generateClipPath("TopRight")}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroDock
