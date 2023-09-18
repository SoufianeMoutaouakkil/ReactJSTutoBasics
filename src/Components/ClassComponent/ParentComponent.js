import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  propsFun = (message) => {
    console.log(
      `i'm Parent Component. this is message from Child : ${message}`
    );
  };
  render() {
    return (
      <div>
        <p>Test communication bitween Components :</p>
        <p>Click the Button and show in console.</p>
        <ChildComponent propsFunction={this.propsFun} />
      </div>
    );
  }
}

export default ParentComponent;
