import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import GeodeworkLogo from "@/public/images/geodework-logo.svg"
import type { Metadata } from "next"
import Link from "next/link"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-mono/IBMPlexMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>

      <body>
        <div className="mx-auto grid min-h-screen max-w-screen-lg grid-rows-[auto_1fr_auto]">
          <header
            className={cn(
              "z-10 flex items-center justify-between max-sm:flex-col",
              "w-full py-4",
              "[&_a]:outline-offset-8"
            )}
          >
            {/* Header start */}
            <Link href="/">
              <GeodeworkLogo />
            </Link>

            {/* Header end */}
            <nav className="flex gap-6">
              <Link href="/#">Home</Link>
              <Link href="/#about">About</Link> {/* TODO: Update */}
              <Link href="/#blog">Blog</Link> {/* TODO: Update */}
            </nav>
          </header>

          <main className="row-start-2">{children}</main>
          <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
        </div>
      </body>
    </html>
  )
}
