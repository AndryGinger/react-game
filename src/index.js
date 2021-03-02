import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const reactApp = document.createElement("div");

reactApp.setAttribute("id", "root");
document.body.appendChild(reactApp);

ReactDOM.render(<App />, reactApp);
