import { ReactQueryProvider } from "./react-query-provider"

export const RootProvider = ({ children }: React.PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
