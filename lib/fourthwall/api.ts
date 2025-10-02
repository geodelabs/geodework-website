import { storefrontProductsResponseSchema } from "@/lib/schemas/fourthwall"

const API_URL = "https://storefront-api.fourthwall.com/v1"
const API_TOKEN = process.env.NEXT_PUBLIC_FOURTHWALL_STOREFRONT_TOKEN!
const BATCH_SIZE = 9
const COLLECTION_SLUG = "geode-merche"

interface Props {
  page: number
  batchSize?: number
}

export const fetchProductListPage = async ({
  page,
  batchSize = BATCH_SIZE,
}: Props) => {
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
