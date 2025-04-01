"use client"

import { CopyButton } from "./copy-button"
import { cn } from "@/lib/utils"
import EthereumLogo from "@/components/svgs/ethereum.svg"
import { QRGradient, qrGradientId } from "./qr-gradient"

import { QRCodeSVG } from 'qrcode.react';
import { shortenAddress } from "@/lib/web3"

interface QRCodeProps {
  title: string
  primaryLink: string
  secondaryLink?: string
  className?: string
  useGradient?: boolean
  logoUrl?: string
}


export function QRCode({ title, primaryLink, secondaryLink, className, useGradient = false, logoUrl }: QRCodeProps) {
  return (
    <div className={cn("flex flex-col items-center gap-4 w-full", className)}>
      <div className="flex items-center gap-3 w-full justify-center">
        <div className="rounded-full bg-white p-1 shadow-md flex-shrink-0">
          <EthereumLogo className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        <h3 className="text-lg sm:text-2xl font-mono break-words">{title}</h3>
      </div>
      <div className="rounded-xl bg-white p-4">
        <div className="relative">
          {useGradient && <QRGradient />}
          <QRCodeSVG
            value={primaryLink}
            size={200}
            bgColor="#ffffff"
            fgColor={useGradient ? `url(#${qrGradientId})` : "#000000"}
            level="H"
            className="h-48 w-48"
            {...(logoUrl && {
              imageSettings: {
                src: logoUrl,
                height: 40,
                width: 40,
                excavate: true
              }
            })}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        {secondaryLink && (
          <div className="flex items-center gap-2">
            <span className="font-mono">{secondaryLink}</span>
            <CopyButton text={secondaryLink} />
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm">
            <span className="hidden sm:inline">{primaryLink}</span>
            <span className="sm:hidden">{shortenAddress(primaryLink)}</span>
          </span>
          <CopyButton text={primaryLink} />
        </div>
      </div>
    </div>
  )
} 