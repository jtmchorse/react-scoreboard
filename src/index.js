import React from "react";
import ReactDOM from "react-dom";

const subtitle = React.createElement(
  "h2",
  { id: "sub-title", title: "helper", className: "bar" },
  "Sub title element"
);

const title = React.createElement(
  "h1",
  { id: "main-title", title: "this is a title", className: "foo" },
  "My First React Element! "
);

ReactDOM.render([title, subtitle], document.getElementById("root"));
