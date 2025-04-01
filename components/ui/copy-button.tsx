"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-accent px-2.5 py-1 text-sm text-primary hover:bg-accent-dark",
        className
      )}
    >
      {copied ? (
          <Check className="h-4 w-4" />
      ) : (
        <>
          Copy
          <Copy className="h-4 w-4" />
        </>
      )}
    </button>
  )
} 