import React, { Component } from "react";

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      selectedOption: "option1",
      isChecked: false,
      selectedRadio: "radio1",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () =>
      console.log(
        `${name} changed to "${value}" and in the state is ${this.state[name]}.`,
      ),
    );
  };

  handleSelectChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    this.setState({ isChecked: event.target.checked }, () =>
      console.log(
        `${name} changed to "${value}" and in the state is ${this.state[name]}.`,
      ),
    );
  };

  handleRadioChange = (event) => {
    this.setState({ selectedRadio: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, selectedOption, isChecked, selectedRadio } =
      this.state;
    console.log("Form submitted with values:");
    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Selected Option:", selectedOption);
    console.log("Is Checked:", isChecked);
    console.log("Selected Radio:", selectedRadio);
  };

  render() {
    return (
      <div>
        <h2>Form Example</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Select Option:
            <select
              name="selectedOption"
              value={this.state.selectedOption}
              onChange={this.handleCheckboxChange}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <br />
          <label>
            <input
              value="test"
              type="checkbox"
              name="isChecked"
              checked={this.state.isChecked}
              onChange={this.handleCheckboxChange}
            />{" "}
            Check me
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedRadio"
              value="radio1"
              checked={this.state.selectedRadio === "radio1"}
              onChange={this.handleInputChange}
            />{" "}
            Radio 1
          </label>
          <label>
            <input
              type="radio"
              name="selectedRadio"
              value="radio2"
              checked={this.state.selectedRadio === "radio2"}
              onChange={this.handleInputChange}
            />{" "}
            Radio 2
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormExample;
