import { CSSProperties } from "react"

export const largeUpperRight: CSSProperties = {
  clipPath: `polygon(0 0, calc(100% - 1.875rem) 0, 100% 1.875rem, 100% 100%, 0 100%)`,
}

export const mediumUpperRight: CSSProperties = {
  clipPath:
    "polygon(0 0, calc(100% - 0.75em) 0, 100% 0.75em, 100% 100%, 0 100%)",
}

export const mediumBottomLeft: CSSProperties = {
  clipPath:
    "polygon(0 0, 100% 0, 100% 100%, 0.75em 100%, 0 calc(100% - 0.75em))",
}

export const smallUpperRight: CSSProperties = {
  clipPath:
    "polygon(0 0, calc(100% - 0.5rem) 0, 100% 0.375rem, 100% 100%, 0 100%)",
}

export const smallBottomLeft: CSSProperties = {
  clipPath:
    "polygon(0 0, 100% 0, 100% 100%, 0.5rem 100%, 0 calc(100% - 0.375rem)",
}

export const subscribeIFrame: CSSProperties = {
  clipPath: `polygon(
    0.125em 0.125em,
    calc(100% - 0.125em) 0.125em,
    calc(100% - 0.125em) calc(100% - 1em),
    calc(100% - 1em) calc(100% - 0.125em),
    0.125em calc(100% - 0.125em)
  )`,
}
