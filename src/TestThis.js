import * as other from "./Components/Other/this";
import React, { Component } from "react";

export default class TestThis extends Component {
  constructor(props) {
    super(props);
    this.thisBoundInConstructor = this.thisBoundInConstructor.bind(this);
  }
  thisInSimpleFunction() {
    console.log("Test of this in thisInSimpleFunction : ", this);
  }
  thisBoundInConstructor() {
    console.log("Test of this in thisBoundInConstructor : ", this);
  }
  thisInArrowFunctionAsVariable = () =>
    console.log("Test of this in thisInArrowFunctionAsVariable : ", this);

  thisInExterneModule() {
    other.arrowfunTest();
    other.functionTest();
    const ct = new other.classTest();
    ct.simpleFun();
    ct.parentFun();
  }
  render() {
    return (
      <div>
        <h4>
          To check the values of this. click the next button and show in console
          :
        </h4>
        <button onClick={this.thisInExterneModule}>
          Check this in externe module.
        </button>
        <button onClick={this.thisInSimpleFunction}>
          Check this with simple function
        </button>
        <button onClick={() => this.thisInSimpleFunction()}>
          Check this with arrow function
        </button>
        <button onClick={this.thisInSimpleFunction.bind(this)}>
          Check this with bind function
        </button>
        <button onClick={this.thisBoundInConstructor}>
          Check this with bind function in constructor
        </button>
        <button onClick={this.thisInArrowFunctionAsVariable}>
          Check this with arrow function As Variable
        </button>
      </div>
    );
  }
}
