import React from "react";

const PropsFC = (props) => {
  return (
    <div>
      <p>This is name from props : {props.name}</p>
      <p>This is children from props : {props.children}</p>
    </div>
  );
};

export default PropsFC;
