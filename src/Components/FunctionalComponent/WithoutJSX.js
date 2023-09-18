import React from "react";

const WithoutJSX = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { id: "test", className: "myClass" },
      "Div with ",
      React.createElement("span", null, "Span without JSX!")
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        { htmlFor: "myInput" },
        "Label for input : "
      ),
      React.createElement("input", { id: "myInput", name: "myInput" })
    )
  );
};

export default WithoutJSX;
