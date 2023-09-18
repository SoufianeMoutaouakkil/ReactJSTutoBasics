import React from "react";

const DelFC = (props) => {
  const divStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    border: "1px solid #ccc",
    textAlign: "center"
  };
  const hrStyle = {
    border: "none",
    height: "2px",
    backgroundColor: "#333",
    margin: "20px 0"
  };
  return (
    <div>
      <hr style={hrStyle} />
      <h2>Subject : {props.title}</h2>
      <div style={divStyle}>{props.children}</div>
      <hr />
    </div>
  );
};

export default DelFC;
