import { useInfiniteQuery } from "@tanstack/react-query"

import { FOURTHWALL_QUERIES } from "@/lib/fourthwall/queries"

export const useProductListQuery = () =>
  useInfiniteQuery(FOURTHWALL_QUERIES.products())
