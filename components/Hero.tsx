import Image from "next/image"
import BgTexture from "@/public/images/bg-texture.png"
import { cn } from "@/lib/utils"

import GeodePolygon4 from "@/public/images/geode-polygon-4.svg"
import GeodePolygon6 from "@/public/images/geode-polygon-6.svg"
import GeodePolygon8 from "@/public/images/geode-polygon-8.svg"
import GeodePolygon10 from "@/public/images/geode-polygon-10.svg"

const Hero = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className}>
      <div className="absolute inset-0 -z-10 h-[36rem]">
        <Image
          src={BgTexture}
          style={{
            objectPosition: "50% 95%", // Overflow top edge
          }}
          className={cn("mx-auto h-full w-full max-w-screen-xl object-cover")}
          alt=""
        />
      </div>

      <div className="mx-auto grid scale-100 grid-cols-3 font-mono text-2xl lowercase tracking-widest transition-transform [&>div:hover]:scale-105 [&>div:hover]:transition-transform [&>div]:self-center">
        {/* CENTRAL GEODE */}
        <div className="pointer-events-none relative col-start-2 row-span-4 row-start-2 grid !size-[300px] place-items-center place-self-center [&>*]:absolute">
          <GeodePolygon4 className="animate-spin-cw-7-5" />
          <GeodePolygon6 className="animate-spin-ccw-15" />
          <GeodePolygon8 className="animate-spin-cw-30" />
          <GeodePolygon10 className="animate-spin-ccw-60" />
        </div>
        {/* TOP */}
        <div className="col-span-3 row-start-1 place-self-center">
          Coordination
        </div>
        {/* LEFT */}
        <div className="col-start-1 row-start-2 -me-12 w-fit place-self-end">
          Global Community
        </div>
        <div className="col-start-1 row-start-3 w-fit place-self-end">
          Technology
        </div>
        <div className="col-start-1 row-start-4 w-fit place-self-end">
          Execution
        </div>
        <div className="col-start-1 row-start-5 -me-12 w-fit place-self-end">
          Grassroots
        </div>
        {/* RIGHT */}
        <div className="col-start-3 row-start-2 -ms-12 w-fit">Ethereum</div>
        <div className="col-start-3 row-start-3 w-fit">Build</div>
        <div className="col-start-3 row-start-4 w-fit">Open Internet</div>
        <div className="col-start-3 row-start-5 -ms-12 w-fit">Ecosystem</div>
        {/* BOTTOM */}
        <div className="col-span-3 row-start-6 place-self-center">
          Decentralization
        </div>
      </div>
    </div>
  )
}

export default Hero
