import type { MDXComponents } from "mdx/types"
import { MarkdownComponents } from "@/components/Markdown/Components"

const customComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-20 text-3xl md:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-16 text-2xl md:text-3xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 mt-8 text-xl md:text-2xl">{children}</h3>
  ),
}
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MarkdownComponents,
    ...components,
    ...customComponents,
  }
}
