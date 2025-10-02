import { infiniteQueryOptions } from "@tanstack/react-query"

import { fetchProductListPage } from "@/lib/fourthwall/api"
import { SHARED_QUERIES } from "@/lib/queries"

export const FOURTHWALL_QUERIES = {
  all: [...SHARED_QUERIES.all, "fourthwall"],
  products: (limit?: number) =>
    infiniteQueryOptions({
      queryKey: [...FOURTHWALL_QUERIES.all, "products", limit],
      queryFn: async ({ pageParam = 1 }) =>
        fetchProductListPage({
          page: pageParam,
          batchSize: limit,
        }),
      initialPageParam: 0,
      getNextPageParam: ({ paging: { pageNumber, hasNextPage } }) =>
        hasNextPage ? pageNumber + 1 : undefined,
    }),
} as const
