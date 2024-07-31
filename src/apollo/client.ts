import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    import.meta.env.VITE_GRAPHQL_ENDPOINT ||
    "https://demo.abneroliveira.eti.br/graphql",

  cache: new InMemoryCache(),
});

export default client;
