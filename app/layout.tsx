import { ArrowRight, Heart as HeartIcon } from "lucide-react"

import AdSense from "@/components/AdSense"
import Matomo from "@/components/Matomo"
import MobileNav from "@/components/MobileNav"
import Socials from "@/components/Socials"
import Subscribe from "@/components/Subscribe"
import Logo from "@/components/svgs/logo.svg"
import QR from "@/components/svgs/QR.svg"
import Link from "@/components/ui/link"

import { cn } from "@/lib/utils"

import { ETHEREUM_ADDRESS, ETHEREUM_ENS } from "@/lib/constants"

import "@/styles/globals.css"

import { generateMetadata } from "@/lib/metadata"
import { RootProvider } from "@/lib/providers/root.provider"
import { generateClipPath } from "@/styles/clipPaths"

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
        <AdSense />
      </head>

      <body className="">
        <div className="mx-auto grid min-h-screen max-w-screen-lg grid-rows-[auto_1fr_auto] px-4">
          <header
            className={cn(
              "z-10 row-start-1 w-full py-8",
              "flex items-center justify-between gap-3",
              "[&_a]:outline-offset-8"
            )}
          >
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            <div className="hidden items-center justify-center gap-6 overflow-visible md:flex">
              <nav
                className="flex gap-6"
                style={{ textShadow: "0 0 1rem rgba(0,0,0,0.75)" }}
              >
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/grants">Grants</Link>
              </nav>
              <div className="relative">
                <div
                  className="donate-button-wrapper"
                  style={generateClipPath("TopRight", "medium")}
                >
                  <Link
                    href="/donate"
                    className="donate-button"
                    style={generateClipPath("TopRight", "medium")}
                  >
                    <HeartIcon className="donate-heart mr-2 h-4 w-4 transition-all" />
                    Donate
                  </Link>
                </div>
                <div
                  className="donate-button-card-wrapper mx-auto"
                  style={generateClipPath("BottomLeft", "medium")}
                >
                  <Link
                    href="/donate"
                    className="donate-button-card"
                    style={generateClipPath("BottomLeft", "medium")}
                  >
                    <QR className="h-44 w-44" />
                    <p className="flex items-center gap-2 text-sm">
                      View other options{" "}
                      <ArrowRight className="inline h-4 w-4" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <MobileNav />
          </header>

          <main className="row-start-2">
            <RootProvider>{children}</RootProvider>
          </main>
        </div>

        <footer className="row-start-3 mx-auto px-4 md:mt-24">
          <div className="m-8 flex flex-col items-center justify-between gap-6 border-t-2 border-primary-light pt-6 md:flex-row md:items-start md:gap-4">
            <div className="flex flex-col gap-4 text-center sm:flex-row sm:gap-6 sm:text-left">
              <p className="text-body-secondary">
                &copy; Geode Labs {new Date().getFullYear()}
              </p>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            <Socials />
          </div>
        </footer>

        <Matomo />
      </body>
    </html>
  )
}
