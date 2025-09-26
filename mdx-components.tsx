import type { MDXComponents } from "mdx/types"

import { MarkdownComponents } from "@/components/Markdown/Components"

const customComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="my-6 mt-20 text-3xl md:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="my-6 mt-12 text-2xl font-bold md:text-3xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="my-6 mt-8 text-xl md:text-2xl">{children}</h3>
  ),
  ul: (props) => (
    <ul
      {...props}
      style={{
        listStylePosition: "outside",
        paddingLeft: "1.25rem",
      }}
    />
  ),
}
export function useMDXComponents(components: MDXComponents) {
  return {
    ...MarkdownComponents,
    ...components,
    ...customComponents,
  }
}
