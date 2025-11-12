import { DEFAULT_CURRENCY } from "@/lib/fourthwall/constants"
import { ProductSchema } from "@/lib/schemas/fourthwall"

export const getProductCurrency = (product: ProductSchema) => {
  return product.variants.at(0)?.unitPrice.currency ?? DEFAULT_CURRENCY
}
