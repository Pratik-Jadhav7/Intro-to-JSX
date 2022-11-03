import React from "react";
import ReactDOM from "react-dom";

const name = "Pratik";

ReactDOM.render(
  <div>
  <h1>My Favorite Food by {name}</h1>
  <ul>
    <li>Dosa</li>
    <li>Idli</li>
    <li>Uttapa</li>
  </ul>

  </div>,
 
  document.getElementById("root")
);
