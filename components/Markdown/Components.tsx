import Image from "next/image"
import { type Components } from "react-markdown"

import Link from "@/components/ui/link"

export const MarkdownComponents: Components = {
  a: ({ children, href }) => <Link href={href}>{children}</Link>,
  img: ({ src, alt }) => (
    // TODO: See if we can optimize images with NextImage; known domain?
    <img className="mx-auto my-8 block" src={src || ""} alt={alt || ""} />
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-16 text-3xl md:text-4xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 mt-8 text-2xl md:text-3xl">{children}</h3>
  ),
  p: ({ children }) => <p className="m-0 mb-4">{children}</p>,
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-accent px-4 py-2">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => <pre className="bg-black/20 p-4">{children}</pre>,
}
