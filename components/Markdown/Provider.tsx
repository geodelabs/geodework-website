import ReactMarkdown from "react-markdown"

import { MarkdownComponents } from "./Components"

import { useMDXComponents } from "@/mdx-components"

export const MarkdownProvider = (props: { children: string }) => {
  const components = useMDXComponents(MarkdownComponents)

  return <ReactMarkdown components={components} {...props} />
}
