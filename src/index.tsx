import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RootStore } from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={RootStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
