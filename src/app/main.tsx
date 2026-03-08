import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import { ThemeProvider } from "@/context/ThemeContext";

import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
