import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  fontSize: "15px",
  color: "red",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
