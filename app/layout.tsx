import Link from "@/components/ui/link"
import Socials from "@/components/Socials"
import Subscribe from "@/components/Subscribe"

import { cn } from "@/lib/utils"

import GeodeworkLogo from "@/public/images/geodework-logo.svg"
import Heart from "@/components/svgs/heart.svg"

import "@/styles/globals.css"
import Matomo from "@/components/Matomo"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata()

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

      <body className="mx-auto grid min-h-screen max-w-screen-lg grid-rows-[auto_1fr_auto] px-4">
        <header
          className={cn(
            "z-10 row-start-1 w-full py-8 max-sm:flex-col",
            "flex items-center justify-between gap-3",
            "[&_a]:outline-offset-8"
          )}
        >
          {/* Header start */}
          <Link href="/" className="!text-white">
            <GeodeworkLogo />
          </Link>

          {/* Header end */}
          <nav
            className="flex gap-6"
            style={{ textShadow: "0 0 1rem rgba(0,0,0,0.75)" }}
          >
            <Link href="/#">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/grant">Grant</Link>
          </nav>
        </header>

        <main className="row-start-2">{children}</main>

        <footer className="row-start-3 my-14 flex flex-col items-center gap-6">
          <Subscribe />

          <p className="-mt-2">
            Donate: <Link href="/donate">geodework.eth</Link>{" "}
            <Heart className="inline text-[red]" />
          </p>

          <Socials />

          <div className="flex flex-wrap gap-6">
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <p className="w-full p-4 text-center text-body-secondary">
            &copy; Geodework {new Date().getFullYear()}
          </p>
        </footer>

        <Matomo />
      </body>
    </html>
  )
}
