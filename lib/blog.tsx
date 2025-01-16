import removeMd from "remove-markdown"
import { MAX_WORDS_PER_POST_PREVIEW } from "@/lib/constants"

export const expectedFilenamePattern =
  /^(2\d{3}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01]))(?:-[\w\d]+)*\.md$/i

export const matchFilename = (file: string) =>
  file.match(expectedFilenamePattern)

export const dateToUTCNoonDate = (date: string) =>
  new Date(date + "T12:00:00.000Z")

export const getSlicedContent = (content: string, maxLength: number = 125) => {
  const SLICED_TEXT = content.split(" ").slice(0, maxLength).join(" ")

  if (content.includes("\n#") && content.indexOf("\n#") >= 0)
    return content
      .slice(0, content.indexOf("\n#"))
      .split(" ")
      .slice(0, maxLength)
      .join(" ")
  if (content.includes("<h") && content.indexOf("<h") >= 0)
    return content
      .slice(0, content.indexOf("<h"))
      .split(" ")
      .slice(0, maxLength)
      .join(" ")

  // if content has no headings, cut the text to 125 words max (END = 125 by default)
  return SLICED_TEXT
}

export const sanitizePostPreviewContent = (content: string): string => {
  const mdRemoved = removeMd(content)
  const truncatedContent = getSlicedContent(mdRemoved)
  const wordArray: string[] = truncatedContent.split(" ")
  const isTooLong: boolean = wordArray.length > MAX_WORDS_PER_POST_PREVIEW
  const sliceEnd: number = isTooLong
    ? MAX_WORDS_PER_POST_PREVIEW
    : wordArray.length
  return wordArray.slice(0, sliceEnd).join(" ") + (isTooLong ? "..." : "")
}
