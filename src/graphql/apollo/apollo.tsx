import React, { PropsWithChildren } from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({ uri: "http://localhost:3000/graphql" })

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem("token")

  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  }
})

const AppApolloProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default AppApolloProvider
