import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // BrowserRouter gives our app all of the functionality of routing
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
