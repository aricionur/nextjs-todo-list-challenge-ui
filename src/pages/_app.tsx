import type { AppProps } from "next/app"

import AppApolloProvider from "../graphql/apollo/apollo"
import { AuthProvider } from "../components/subjectRelated/auth/context/AuthContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppApolloProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppApolloProvider>
  )
}
