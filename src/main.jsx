import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/global.css"; // (vamos criar depois)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);