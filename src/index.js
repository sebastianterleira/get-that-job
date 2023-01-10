import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { global, reset } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
  </BrowserRouter>
);
