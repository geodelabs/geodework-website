"use client"

import { useState } from "react"
import { ArrowRight, Heart, Menu, X } from "lucide-react"

import Logo from "@/components/svgs/logo.svg"
import Link from "@/components/ui/link"

import { cn } from "@/lib/utils"

import { generateClipPath } from "@/styles/clipPaths"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white transition-colors hover:text-primary-light"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={closeMenu} />
      )}

      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-full transform bg-primary transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6 p-6">
          <div className="flex items-center justify-between py-2">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Logo />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 text-white transition-colors hover:text-primary-light"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav
            className="mt-4 flex flex-col gap-4"
            style={{ textShadow: "0 0 1rem rgba(0,0,0,0.75)" }}
          >
            <Link
              href="/about"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white pb-3 text-lg !text-white"
            >
              <span>About</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/blog"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white pb-3 text-lg !text-white"
            >
              <span>Blog</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/grants"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white pb-3 text-lg !text-white"
            >
              <span>Grants</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/donate"
              onClick={closeMenu}
              className="donate-button mt-4 inline-flex items-center justify-center py-2"
              style={generateClipPath(["TopRight", "BottomLeft"], "medium")}
            >
              <Heart className="mr-2 h-4 w-4 transition-all hover:fill-primary-dark" />
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
