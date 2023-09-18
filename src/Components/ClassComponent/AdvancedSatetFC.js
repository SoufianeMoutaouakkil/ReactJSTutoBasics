import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(
      (prevState, props) => {
        const { maxCount } = props;
        const updatedCount = prevState.count + 1;

        // Check if the new count exceeds the maxCount prop
        if (updatedCount > maxCount) {
          return null; // Return null to indicate no state update
        }

        return { count: updatedCount };
      },
      () =>
        alert(`i'm from callback of setState. Count is : ${this.state.count}.`)
    );
    alert(`i'm after setState. Count is : ${this.state.count}.`);
  };

  render() {
    const { count } = this.state;
    const { maxCount } = this.props;

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={this.increment} disabled={count >= maxCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
