import type { AppProps } from "next/app"
import AppApolloProvider from "../graphql/apollo/apollo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppApolloProvider>
      {/* <AuthProvider>{children}</AuthProvider> */}
      <Component {...pageProps} />
    </AppApolloProvider>
  )
}
