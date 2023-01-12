import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';

import App from "./App";
import { global, reset } from "./styles";
import { AuthProvider } from "./context/auth-context";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BF5F82",
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
          <Global styles={reset} />
          <Global styles={global} />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
        </AuthProvider>
    </BrowserRouter>
);
