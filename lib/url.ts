import { SITE_URL } from "./constants"

export const isExternal = (href: string): boolean =>
  href.includes("http") || href.includes("mailto:") || href.includes("ipfs")

export const isHash = (href: string): boolean => href.startsWith("#")

export const normalizeUrl = (path: string): URL => {
  if (path.startsWith("http")) return new URL(path)

  const normalizedPath = `/${path}`.replace("//", "/")

  // If hosted internally, prepend the site url
  return new URL(normalizedPath, SITE_URL)
}
