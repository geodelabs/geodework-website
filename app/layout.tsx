import { ArrowRight,Heart as HeartIcon } from "lucide-react"

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

          <div className="hidden md:flex gap-6 justify-center items-center overflow-visible">
            <nav
              className="flex gap-6"
              style={{ textShadow: "0 0 1rem rgba(0,0,0,0.75)" }}
            >
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/grants">Grants</Link>
            </nav>
            <div className="relative">
              <Link href="/donate" className="donate-button inline-flex items-center" style={generateClipPath("TopRight", "medium")}>
                <HeartIcon className="donate-heart mr-2 h-4 w-4 transition-all" />
                Donate
              </Link>
              <Link href="/donate" className="donate-button-card flex flex-col justify-center items-center">
                 <QR className="h-40 w-40" />
                 <p className="flex items-center gap-2">View options <ArrowRight className="h-4 w-4 inline" /></p>
              </Link>
            </div>
          </div>

          <MobileNav />
        </header>

        <main className="row-start-2">
          <RootProvider>{children}</RootProvider>
        </main>
        </div>
        
        <footer className="row-start-3 md:mt-24 mx-auto  px-4">
            <div className="flex flex-col m-8 md:flex-row justify-between items-center md:items-start border-t-2 border-primary-light pt-6 gap-6 md:gap-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
                <p className="text-body-secondary">
                &copy; Geode Labs {new Date().getFullYear()}
                </p>
                <Link href="/terms-of-use">Terms of Use</Link>
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
