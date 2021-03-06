import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <Auth0Provider
  //   domain="monopeelz.auth0.com"
  //   clientId="6lRpHGy4tv5QQvxZeFvD3WarFSLxwa3z"
  //   redirectUri={window.location.origin}
  // >
  <App />,
  // </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
