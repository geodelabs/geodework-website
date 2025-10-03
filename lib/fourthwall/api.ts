import { DEFAULT_CURRENCY } from "@/lib/fourthwall/constants"
import {
  productSchema,
  storefrontProductsResponseSchema,
} from "@/lib/schemas/fourthwall"

const API_URL = "https://storefront-api.fourthwall.com/v1"
const API_TOKEN = process.env.NEXT_PUBLIC_FOURTHWALL_STOREFRONT_TOKEN!
const BATCH_SIZE = 6
const COLLECTION_SLUG = "geode-merche"

export const fetchProductListPage = async ({
  page,
  batchSize = BATCH_SIZE,
}: {
  page: number
  batchSize?: number
}) => {
  const query = new URLSearchParams({
    page: page.toString(),
    size: batchSize.toString(),
    storefront_token: API_TOKEN,
  })
  const url = `${API_URL}/collections/${COLLECTION_SLUG}/products?${query.toString()}`

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch products")

  const json = await res.json()
  const parseResult = storefrontProductsResponseSchema.safeParse(json)
  if (!parseResult.success) throw new Error("Invalid response from API")

  return parseResult.data
}

export const fetchProductDetails = async ({
  slug,
  currency = DEFAULT_CURRENCY,
}: {
  slug: string
  currency?: string
}) => {
  const query = new URLSearchParams({
    currency,
    storefront_token: API_TOKEN,
  })
  const url = `${API_URL}/products/${slug}?${query.toString()}`

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch product details")

  const json = await res.json()
  const parseResult = productSchema.safeParse(json)
  if (!parseResult.success) throw new Error("Invalid response from API")

  return parseResult.data
}
