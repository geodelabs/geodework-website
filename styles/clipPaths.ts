import { CSSProperties } from "react"

const sizeVariants = {
  small: "0.5rem",
  medium: "0.75em",
  large: "1.875rem",
} as const

type Size = keyof typeof sizeVariants

type Corner = "TopLeft" | "TopRight" | "BottomRight" | "BottomLeft"

export const generateClipPath = (
  corners: Corner | Corner[],
  size: Size = "medium"
): CSSProperties => {
  const sizeValue = sizeVariants[size]
  const cornersArray = Array.isArray(corners) ? corners : [corners]

  const TopLeftCoords = cornersArray.includes("TopLeft")
    ? `0 ${sizeValue}, ${sizeValue} 0`
    : "0 0"
  const TopRightCoords = cornersArray.includes("TopRight")
    ? `calc(100% - ${sizeValue}) 0, 100% ${sizeValue}`
    : "100% 0"
  const BottomRightCoords = cornersArray.includes("BottomRight")
    ? `100% calc(100% - ${sizeValue}), calc(100% - ${sizeValue}) 100%`
    : "100% 100%"
  const BottomLeftCoords = cornersArray.includes("BottomLeft")
    ? `${sizeValue} 100%, 0 calc(100% - ${sizeValue})`
    : "0 100%"
  const clipPath = `polygon(${TopLeftCoords}, ${TopRightCoords}, ${BottomRightCoords}, ${BottomLeftCoords})`
  return { clipPath }
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
