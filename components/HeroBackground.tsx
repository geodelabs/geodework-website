import Image from "next/image"

import { cn } from "@/lib/utils"

import background from "@/public/images/bg-texture.png"

const HeroBackground = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("absolute inset-0 -z-10 h-[12rem]", className)}>
    <Image
      src={background}
      priority
      style={{
        objectPosition: "50% 100%", // Overflow top edge
        width: "100%",
        height: "100%",
      }}
      sizes="100vw"
      className="mx-auto max-w-screen-xl animate-fade-in object-cover"
      alt=""
    />
  </div>
)

export default HeroBackground
