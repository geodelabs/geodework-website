import React from "react"
import { Heart } from "lucide-react"
import Link from "next/link"

import { generateClipPath } from "@/styles/clipPaths"

const HeroDock = () => {
  const clipPathStyle = generateClipPath(["BottomLeft", "TopRight"])
  const bottomLeftClipPath = generateClipPath("BottomLeft")
  const topRightClipPath = generateClipPath("TopRight")

  return (
    <div
      className="min-w-4xl relative mx-auto bg-white p-0.5 font-mono text-sm font-semibold sm:p-1 md:text-lg lg:text-xl"
      style={clipPathStyle}
    >
      <div
        className="flex items-stretch overflow-visible bg-primary"
        style={clipPathStyle}
      >
        {/* Newsletter */}
        <div
          className="relative min-w-0 flex-1 basis-0"
          style={bottomLeftClipPath}
        >
          <button
            className="group relative h-full w-full px-3 py-2 transition-all sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8"
            style={bottomLeftClipPath}
          >
            <span className="relative z-10 block transition-colors group-hover:text-primary">
              <Link
                href="/newsletter"
                className="flex h-full w-full items-center justify-center"
              >
                Newsletter
              </Link>
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
        {/* Shop */}
        <div className="relative min-w-0 flex-1 basis-0">
          <button className="h-full w-full border-2 border-transparent px-3 py-2 transition-colors hover:border-primary hover:bg-white hover:text-primary sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8">
            <Link
              href="https://shop.geode.build/"
              className="flex h-full w-full items-center justify-center"
            >
              Shop
            </Link>
          </button>
        </div>
        <div className="w-0.5 flex-shrink-0 bg-white sm:w-1" />
        {/* Donate */}
        <div
          className="relative min-w-0 flex-1 basis-0 bg-accent"
          style={topRightClipPath}
        >
          <button
            className="group relative h-full w-full px-3 py-2 transition-all sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8"
            style={topRightClipPath}
          >
            <span className="relative z-10 block text-primary transition-colors group-hover:text-primary">
              <Link
                href="/donate"
                className="flex h-full w-full items-center justify-center"
              >
                <Heart className="mr-1 h-4 w-4 flex-shrink-0 transition-all group-hover:fill-primary md:mr-2 md:h-5 md:w-5" />
                Donate
              </Link>
            </span>
            <div
              className="absolute inset-[2px] bg-white opacity-0 transition-opacity group-hover:opacity-100"
              style={topRightClipPath}
            />
          </button>
          <div
            className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors group-hover:border-accent"
            style={topRightClipPath}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroDock
