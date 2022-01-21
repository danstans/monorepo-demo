import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Index from "./pages/Index";
import { UiProvider } from "pacemaker";

ReactDOM.render(
  <React.StrictMode>
    <UiProvider>
      <Index />
    </UiProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
