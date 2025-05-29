import React from "react";
import ReactDOM from "react-dom";

const date = new Date().getHours();
let greeting;
let customStyle;

if (date < 12) {
  greeting = "Good Morning";
  customStyle = { color: "red" };
}
if (date >= 12 && date < 18) {
  greeting = "Good Afternoon";
  customStyle = { color: "green" };
}
if (date >= 18) {
  greeting = "Good Evening";
  customStyle = { color: "blue" };
}

ReactDOM.render(
  <h1 className={"heading"} style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
