import { ImageResponse } from "next/og"

import { SITE_NAME, SITE_URL } from "@/lib/constants"

import GeodeGlyph from "@/public/images/geode-glyph.svg"

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get("title") || SITE_NAME

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col items-center justify-center bg-blue-700 text-white relative"
        style={{
          backgroundImage: `url('${SITE_URL}/images/bg-texture.png')`,
        }}
      >
        <GeodeGlyph tw="text-6xl" width="20rem" height="20rem" />
        <h1 tw="flex flex-col text-left text-4xl font-semibold tracking-widest">
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
