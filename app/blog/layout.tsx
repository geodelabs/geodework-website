import React from "react"
import { Heart } from "lucide-react"
import Link from "next/link"

import Subscribe from "@/components/Subscribe"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="flex flex-col items-center">
        <Subscribe />
        <div className="mb-16 mt-8 text-center">
          <p className="text-lg">
            Donate:{" "}
            <Link href="/donate" className="text-accent hover:underline">
              geodelabs.eth
            </Link>{" "}
            <Heart
              className="inline h-5 w-5 text-red-500"
              fill="currentColor"
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default layout
