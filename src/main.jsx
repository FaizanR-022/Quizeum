import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Global/Theme.js";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ThemeProvider>
  // {/* </React.StrictMode> */}
);
