import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// styles
import "./assets/css/bootstrap.min.css";
// import "./assets/scss/now-ui-kit.scss";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
// import "./assets/demo/nucleo-icons-page-styles.css";
// import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
