import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    import.meta.env.VITE_GRAPHQL_ENDPOINT ||
    // "https://demo.abneroliveira.eti.br/graphql",
    "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default client;
