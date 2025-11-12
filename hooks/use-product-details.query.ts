import { useQuery } from "@tanstack/react-query"

import { FOURTHWALL_QUERIES } from "@/lib/fourthwall/queries"

export const useProductDetailsQuery = (slug: string) =>
  useQuery(FOURTHWALL_QUERIES.product(slug))
