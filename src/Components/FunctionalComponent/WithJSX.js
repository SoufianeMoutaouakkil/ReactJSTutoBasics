import React from "react";

const WithJSX = () => {
  return (
    <div>
      Div with <span>Span with JSX</span>
      <div>
        <label htmlFor="myInputJsx">Lable for input : </label>
        <input id="myInputJsx" name="myInputJsx" />
      </div>
    </div>
  );
};

export default WithJSX;
