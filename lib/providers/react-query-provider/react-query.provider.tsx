"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { getQueryClient } from "./get-query-client"

interface Props extends React.PropsWithChildren {
  queryClient?: QueryClient
}

export const ReactQueryProvider = ({ children, queryClient }: Props) => {
  const client = queryClient || getQueryClient()

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.DEBUG === "true" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
