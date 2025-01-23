export type FrontMatter = {
  title: string
  publishedTime: string
  description?: string
  image?: string
}

export type BlogPost = {
  frontmatter: FrontMatter
  slug: string
  content: string
}
