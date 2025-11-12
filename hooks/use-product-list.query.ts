import { useEffect } from "react"
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query"

import { FOURTHWALL_QUERIES } from "@/lib/fourthwall/queries"
import type { ProductSchema } from "@/lib/schemas/fourthwall"

export const useProductListQuery = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(FOURTHWALL_QUERIES.products())

  // Cache details of fetched products
  const qc = useQueryClient()
  useEffect(() => {
    if (!data) return
    data.pages.forEach((page) => {
      page.results.forEach((product) => {
        const queryKey = FOURTHWALL_QUERIES.product(product.slug).queryKey
        const cachedProduct = qc.getQueryData<ProductSchema>(queryKey)

        // Skip if product is already cached
        if (cachedProduct?.updatedAt === product.updatedAt) return

        qc.setQueryData(queryKey, product)
      })
    })
  }, [data, qc])

  return {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  }
}
