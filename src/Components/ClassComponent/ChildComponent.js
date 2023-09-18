import React, { Component } from "react";

class ChildComponent extends Component {
  handlePropsFun = () => {
    this.props.propsFunction("i'm Child ^^!");
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePropsFun}>
          I'm in the child Component. but i can fire a function of Parent
          Component
        </button>
      </div>
    );
  }
}

export default ChildComponent;
