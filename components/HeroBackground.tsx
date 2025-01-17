import Image from "next/image"
import BgTexture from "@/public/images/bg-texture.png"
import { cn } from "@/lib/utils"

const HeroBackground = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("absolute inset-0 -z-10 h-[12rem]", className)}>
    <Image
      src={BgTexture}
      priority
      style={{
        objectPosition: "50% 100%", // Overflow top edge
      }}
      className="mx-auto h-full w-full max-w-screen-xl object-cover"
      alt=""
    />
  </div>
)

export default HeroBackground
