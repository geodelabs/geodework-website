import { QRCode } from "@/components/ui/qr-code"
import { SITE_NAME, ETHEREUM_ADDRESS, ETHEREUM_ENS, BITCOIN_ADDRESS, BUY_ME_A_COFFEE_URL } from "@/lib/constants"
import { CopyButton } from "@/components/ui/copy-button"
import BitcoinLogo from "@/components/svgs/bitcoin.svg"
import BuyMeACoffeeLogo from "@/components/svgs/buymeacoffee.svg"
import Link from "@/components/ui/link"
import { shortenAddress } from "@/lib/web3"

const alternativeOptions: {
  name: string,
  url: string,
}[] = [
  {
    name: "Buy Me a Coffee",
    url: BUY_ME_A_COFFEE_URL,
  }
]

export default function Donations() {
  return (
    <div className="mx-auto max-w-3xl px-2 sm:py-16">
      <h1 className="mb-8 text-center font-mono text-4xl md:text-5xl">
        Support {SITE_NAME}
      </h1>

      <div className="mb-7 flex flex-col items-center gap-4 text-center">
        <p className="text-lg">
          Your support helps us continue building and improving our product and ecodev work.
        </p>
      </div>

      <div className="prose prose-invert mx-auto">
        <div className="space-y-6">
          <div className="space-y-6">
            {/* Primary Option - Ethereum */}
            <div className="w-full max-w-md mx-auto rounded-3xl p-4">
              <div className="flex flex-col items-center justify-center">
                <QRCode
                  title="Ethereum"
                  primaryLink={ETHEREUM_ADDRESS}
                  secondaryLink={ETHEREUM_ENS}
                  useGradient={true}
                  logoUrl="/images/geodework-circle-logo.svg"
                />
              </div>
            </div>

            {/* Alternative Options */}
            <div className="mt-12 space-y-4">
              <h3 className="text-center font-mono text-xl">Alternative Options</h3>
              <div className="flex flex-col gap-6">
                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-white rounded-full shadow-md flex-shrink-0">
                        <BitcoinLogo className="h-6 w-6 sm:h-6 sm:w-6" />
                      </div>
                      <h4 className="font-mono text-base">Bitcoin</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:hidden">{shortenAddress(BITCOIN_ADDRESS)}</span>
                      <span className="font-mono text-sm hidden sm:inline">{BITCOIN_ADDRESS}</span>
                      <CopyButton text={BITCOIN_ADDRESS} />
                    </div>
                  </div>
                </div>
                {alternativeOptions.map((option) => (
                  <div className="bg-white/5 rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-2">
                      <Link className="group font-mono text-base text-white group-hover:text-yellow-400" href={option.url}>
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
            <div className="bg-white/5 rounded-2xl p-5">
              <ol className="mx-auto max-w-md space-y-3 text-left list-decimal list-inside">
                <li>Choose your preferred donation method above</li>
                <li>For Ethereum: Scan the QR code or copy the address</li>
                <li>For Bitcoin: Copy the address using the copy button</li>
                <li>For other methods: Click the link and follow the instructions on the website</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
