import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
// redux
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import client from "./apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
