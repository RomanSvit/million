import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import { PriceContextProvider } from "./context/priceContext";

ReactDOM.render(
  <PriceContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PriceContextProvider>,
  document.getElementById("root")
);
