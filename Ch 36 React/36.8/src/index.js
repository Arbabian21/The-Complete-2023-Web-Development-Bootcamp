//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
var YOURNAME = "Arbab Arif";
var CURRENTYEAR = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
//E.g.
//Created by Angela Yu.
//Copyright 2019.
