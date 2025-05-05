import { EBlogProvider, LOCAL_ETHEREUM_BLOG_URL } from "../constants"

export class BlogProvider {
  constructor(
    private readonly slug: string,
    private readonly blogProvider: string
  ) {
    this.slug = slug
    this.blogProvider = blogProvider
  }

  // NOTE: Make it another class when more blog providers are added
  getMethodsByBlogProvider(blogProvider: string) {
    switch (blogProvider) {
      case EBlogProvider.LOCAL_ETHEREUM:
        return {
          getBlogPostUrl: () => `${LOCAL_ETHEREUM_BLOG_URL}/p/${this.slug}`,
          getIsBlogPostExists: async (url: string) => {
            const response = await fetch(url, { method: "HEAD" })
            return !new URL(response.url).searchParams.get("404")
          },
        }
      default:
        return {
          getBlogPostUrl: () => "",
          getIsBlogPostExists: async () => false,
        }
    }
  }

  getBlogPostUrl() {
    const methods = this.getMethodsByBlogProvider(this.blogProvider)
    return methods.getBlogPostUrl()
  }

  async getIsBlogPostExists(): Promise<boolean> {
    const methods = this.getMethodsByBlogProvider(this.blogProvider)
    const url = methods.getBlogPostUrl()
    return await methods.getIsBlogPostExists(url)
  }
}
