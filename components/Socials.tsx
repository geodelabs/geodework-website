import Link from "./ui/link"

import { cn } from "@/lib/utils"

import { generateClipPath } from "@/styles/clipPaths"

import GitHub from "./svgs/github.svg"
import Mail from "./svgs/mail.svg"
import Twitter from "./svgs/twitter.svg"

const Socials = () => (
  <section className="flex gap-x-2">
    <Link
      aria-label="Email"
      href="mailto:hello@geodework.com"
      className={cn(
        "group grid rotate-0 place-items-center p-3 text-xl sm:p-4 sm:text-2xl",
        "bg-transparent text-white/90 visited:text-white/90",
        "transition-transform hover:rotate-2 hover:bg-body hover:text-accent-dark hover:transition-transform"
      )}
      hideArrow
      style={generateClipPath("BottomLeft")}
    >
      <Mail className="scale-100 transition-transform group-hover:scale-125 group-hover:transition-transform" />
    </Link>
    <Link
      aria-label="Twitter"
      href="https://x.com/Geodework"
      className={cn(
        "group grid rotate-0 place-items-center p-3 text-xl sm:p-4 sm:text-2xl",
        "bg-transparent text-white/90 visited:text-white/90",
        "transition-transform hover:-rotate-2 hover:bg-body hover:text-primary-dark hover:transition-transform"
      )}
      hideArrow
    >
      <Twitter className="scale-100 transition-transform group-hover:scale-125 group-hover:transition-transform" />
    </Link>
    <Link
      aria-label="GitHub"
      href="https://github.com/geodework/"
      className={cn(
        "group grid rotate-0 place-items-center p-3 text-xl sm:p-4 sm:text-2xl",
        "bg-transparent text-white/90 visited:text-white/90",
        "transition-transform hover:rotate-2 hover:bg-body hover:text-accent-alt hover:transition-transform"
      )}
      hideArrow
      style={generateClipPath("TopRight")}
    >
      <GitHub className="scale-100 transition-transform group-hover:scale-125 group-hover:transition-transform" />
    </Link>
  </section>
)

export default Socials
