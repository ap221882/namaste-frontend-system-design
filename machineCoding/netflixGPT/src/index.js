import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootDOMElement = document.querySelector("#root");

const rootElement = ReactDOM.createRoot(rootDOMElement);

rootElement.render(<App />);
