// General
export const SITE_NAME = "Geodework"
export const SITE_DESCRIPTION =
  "An ecosystem product studio dedicated to global Ethereum ecosystem development and as such building a better Internet."
export const GEODEWORK_URL = "https://geodework.com"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || GEODEWORK_URL

// Blog
export const BLOG_PATH = "/blog"
export const BLOG_CONTENT_DIR = "app/blog/content"
export const MAX_WORDS_PER_POST_PREVIEW = 80

// Matomo
export const MATOMO_OPT_OUT_LS_KEY = "matomo-opt-out"

// Crypto
export const ETHEREUM_ADDRESS = "0xEE0735e0126268ddfc618aAE730a847127E8c04E"
export const ETHEREUM_ENS = "geodework.eth"
export const BITCOIN_ADDRESS = "34SaUzgf33AHcVshu1PKGuq1JNSc4io82j"

// Donation
export const GIVETH_URL = "https://giveth.io/project/geodework"
export const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/geodework"
export const GITCOIN_URL =
  "https://explorer.gitcoin.co/#/projects/0x9688fb4c1d28b3d8774f148917bbd9def2fc1e47ef5098f39e02482c1c1f71b0"

// Blog
export const LOCAL_ETHEREUM_BLOG_URL = "https://localethereum.beehiiv.com"

export enum EBlogProvider {
  LOCAL_ETHEREUM = "localethereum",
}
