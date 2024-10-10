import React from "react";
import ReactDOM from "react-dom";

const fname = "Arbab";
const lname = "Arif";
var luckyNum = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    {/* <h1>Hello {`${fname} ${lname}`}!</h1> */}
    <p>Your lucky number is {luckyNum}</p>
    <p>Your random lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
