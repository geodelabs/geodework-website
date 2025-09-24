import Image from "next/image"

import HeroBackground from "@/components/HeroBackground"
import BitcoinLogo from "@/components/svgs/bitcoin.svg"
import { CopyButton } from "@/components/ui/copy-button"
import Link from "@/components/ui/link"
import { QRCode } from "@/components/ui/qr-code"

import {
  BITCOIN_ADDRESS,
  BUY_ME_A_COFFEE_URL,
  ETHEREUM_ADDRESS,
  ETHEREUM_ENS,
  GITCOIN_URL,
  GIVETH_URL,
  SITE_NAME,
} from "@/lib/constants"

import { generateMetadata } from "@/lib/metadata"
import { shortenAddress } from "@/lib/web3"

const alternativeOptions: {
  name: string
  url: string
}[] = [
  {
    name: "Giveth",
    url: GIVETH_URL,
  },
  {
    name: "Gitcoin",
    url: GITCOIN_URL,
  },
  {
    name: "Buy Me a Coffee",
    url: BUY_ME_A_COFFEE_URL,
  },
]

export const metadata = generateMetadata("Donate", "/donate")

const titleLogoImage = (
  <Image
    src="/images/geode-ethereum.png"
    alt="Geode Labs Logo"
    width={72}
    height={72}
    quality={100}
    priority
    className="h-[38px] w-[38px]"
  />
)

export default function Donate() {
  return (
    <>
      <HeroBackground />
      <div className="mx-auto max-w-3xl px-2 sm:py-16">
        <h1 className="mb-8 text-center font-mono text-4xl md:text-5xl">
          Support {SITE_NAME}
        </h1>

        <div className="mb-7 flex flex-col items-center gap-4 text-center">
          <p className="text-lg">
            Your support helps us continue building and improving our product
            and ecodev work.
          </p>
        </div>

        <div className="prose prose-invert mx-auto">
          <div className="space-y-6">
            <div className="space-y-6">
              {/* Primary Option - Ethereum */}
              <div className="mx-auto w-full max-w-md rounded-3xl p-4">
                <div className="flex flex-col items-center justify-center">
                  <QRCode
                    title="Ethereum"
                    primaryLink={ETHEREUM_ADDRESS}
                    secondaryLink={ETHEREUM_ENS}
                    useGradient={true}
                    embedImageInQRCode="/images/geode-labs-circle-logo.svg"
                    titleLogoImage={titleLogoImage}
                  />
                </div>
              </div>

              {/* Alternative Options */}
              <div className="mt-12 space-y-4">
                <h3 className="text-center font-mono text-xl">
                  Alternative Options
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0 rounded-full bg-white shadow-md">
                          <BitcoinLogo className="h-6 w-6 sm:h-6 sm:w-6" />
                        </div>
                        <h4 className="font-mono text-base">Bitcoin</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm sm:hidden">
                          {shortenAddress(BITCOIN_ADDRESS)}
                        </span>
                        <span className="hidden font-mono text-sm sm:inline">
                          {BITCOIN_ADDRESS}
                        </span>
                        <CopyButton text={BITCOIN_ADDRESS} />
                      </div>
                    </div>
                  </div>
                  {alternativeOptions.map((option) => (
                    <div
                      className="rounded-2xl bg-white/5 p-6"
                      key={option.name}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          className="group font-mono text-base text-white group-hover:text-yellow-400"
                          href={option.url}
                        >
                          Support us on {option.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How to Donate Instructions */}
            <div className="mt-16 space-y-4">
              <h2 className="text-center text-2xl font-bold">How to Donate</h2>
              <div className="rounded-2xl bg-white/5 p-5">
                <ol className="mx-auto max-w-md list-inside list-decimal space-y-3 text-left">
                  <li>Choose your preferred donation method above</li>
                  <li>For Ethereum: Scan the QR code or copy the address</li>
                  <li>For Bitcoin: Copy the address using the copy button</li>
                  <li>
                    For other methods: Click the link and follow the
                    instructions on the website
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
