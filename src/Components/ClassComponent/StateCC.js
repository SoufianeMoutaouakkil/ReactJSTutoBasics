import React, { Component } from "react";

class StateCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome visitor",
      isSubscribed: false
    };
  }

  toggleSubscription = () => {
    this.setState((prevState) => ({
      message: prevState.isSubscribed
        ? "Welcome visitor"
        : "Thanks for subscribing",
      isSubscribed: !prevState.isSubscribed
    }));
  };

  render() {
    return (
      <div>
        <h4>StateCC : {this.state.message}</h4>
        <button onClick={this.toggleSubscription}>
          {this.state.isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
    );
  }
}

export default StateCC;
