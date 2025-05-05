import { cn } from "@/lib/utils"

import GeodeGlyph from "@/public/images/geode-glyph.svg"

const GeodeIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <GeodeGlyph className={cn("text-[2rem]", className)} {...props} />
)

export default GeodeIcon
