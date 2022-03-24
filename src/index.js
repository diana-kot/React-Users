import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./containers/App/App";
import { Router } from "@routes/routesConfig";
import reportWebVitals from "./reportWebVitals";

import "@styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    
      <Router />
   
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
