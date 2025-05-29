import React from "react";
import ReactDOM from "react-dom";
import Pi, { doublePi, tripplePi } from "./math";
ReactDOM.render(
  <ul>
    <li>{Pi}</li>
    <li>{doublePi()}</li>
    <li>{tripplePi()}</li>
  </ul>,
  document.getElementById("root")
);
