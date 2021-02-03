import React, { Suspense } from "react";
import theme from "./theme";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import Loading from "./components/Loading";
import routes from "./routes";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => {
  const routing = useRoutes(routes);
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "https://graphql-pokeapi.vercel.app/api/graphql",
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <GlobalStyles />
        <ApolloProvider client={client}>{routing}</ApolloProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
