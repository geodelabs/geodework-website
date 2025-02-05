import type { MDXComponents } from "mdx/types"
import { MarkdownComponents } from "@/components/Markdown/Components"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MarkdownComponents,
    ...components,
  }
}
