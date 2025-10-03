"use client"

import { ErrorBoundary, type FallbackProps } from "react-error-boundary"
import { type QueryKey, useQueryClient } from "@tanstack/react-query"

interface Props extends React.PropsWithChildren {
  queryKey: QueryKey | QueryKey[]
  fallback: React.ComponentType<FallbackProps>
}

export const WithQueryErrorBoundary = ({
  children,
  queryKey,
  fallback,
}: Props) => {
  const queryClient = useQueryClient()

  const onReset = async () => {
    const queryKeys = Array.isArray(queryKey[0]) ? queryKey : [queryKey]
    await Promise.all(
      queryKeys.map((key) =>
        queryClient.invalidateQueries({ queryKey: key as QueryKey })
      )
    )
  }

  return (
    <ErrorBoundary FallbackComponent={fallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  )
}
