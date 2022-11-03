import React from "react";
import ReactDOM from "react-dom";

const fname = "Pratik";
const lname = "Jadhav";

ReactDOM.render(
  <div>
  <h1>My Favorite Food by {fname} {lname}</h1>
  <ul>
    <li>Dosa</li>
    <li>Idli</li>
    <li>Uttapa</li>
  </ul>

  </div>,
 
  document.getElementById("root")
);
