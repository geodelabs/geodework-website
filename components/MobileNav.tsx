"use client"

import { useState } from "react"
import { Menu, X, Heart, ArrowRight } from "lucide-react"

import Link from "@/components/ui/link"
import { cn } from "@/lib/utils"
import { generateClipPath } from "@/styles/clipPaths"
import Logo from "@/components/svgs/logo.svg"


export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-primary-light transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-full bg-primary z-50 transform transition-transform duration-300 ease-in-out",
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
              className="p-2 text-white hover:text-primary-light transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav 
            className="flex flex-col gap-4 mt-4"
            style={{ textShadow: "0 0 1rem rgba(0,0,0,0.75)" }}
          >
            <Link 
              href="/about" 
              onClick={closeMenu}
              className="text-lg !text-white border-b border-white pb-3 flex items-center justify-between"
            >
              <span>About</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/blog" 
              onClick={closeMenu}
              className="text-lg !text-white border-b border-white pb-3 flex items-center justify-between"
            >
              <span>Blog</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/grants" 
              onClick={closeMenu}
              className="text-lg !text-white border-b border-white pb-3 flex items-center justify-between"
            >
              <span>Grants</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/donate" 
              onClick={closeMenu}
              className="donate-button py-2 inline-flex items-center justify-center mt-4" 
              style={generateClipPath(["TopRight", "BottomLeft"], "medium")}
            >
              <Heart className="mr-2 h-4 w-4 hover:fill-primary-dark transition-all" />
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
