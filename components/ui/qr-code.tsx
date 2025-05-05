"use client"

import { QRCodeSVG } from "qrcode.react"

import { cn } from "@/lib/utils"

import { CopyButton } from "./copy-button"
import { QRGradient, qrGradientId } from "./qr-gradient"

import { shortenAddress } from "@/lib/web3"

interface QRCodeProps {
  title: string
  primaryLink: string
  titleLogoImage?: React.ReactNode
  secondaryLink?: string
  className?: string
  useGradient?: boolean
  embedImageInQRCode?: string
}

export function QRCode({
  title,
  primaryLink,
  secondaryLink,
  className,
  useGradient = false,
  embedImageInQRCode,
  titleLogoImage,
}: QRCodeProps) {
  return (
    <div className={cn("flex w-full flex-col items-center gap-4", className)}>
      <div className="flex w-full items-center justify-center gap-3">
        {titleLogoImage && <div>{titleLogoImage}</div>}
        <h3 className="break-words font-mono text-lg sm:text-2xl">{title}</h3>
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
            {...(embedImageInQRCode && {
              imageSettings: {
                src: embedImageInQRCode,
                height: 40,
                width: 40,
                excavate: true,
              },
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
