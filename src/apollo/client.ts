import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    import.meta.env.VITE_GRAPHQL_ENDPOINT ||
    "https://demo.abneroliveira.eti.br/graphql",
  cache: new InMemoryCache(),
});

console.log("VITE_GRAPHQL_ENDPOINT", import.meta.env.VITE_GRAPHQL_ENDPOINT);

export default client;
