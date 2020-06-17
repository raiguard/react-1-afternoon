import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      palindrome: "",
      userInput: ""
    };
  }
  onInputChange(event) {
    this.setState({ userInput: event.target.value });
  }
  onSubmit() {
    const { userInput } = this.state;
    const palindrome = userInput.split("").reverse().join("");

    if (userInput === palindrome) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(event) => this.onInputChange(event)}
          value={this.state.userInput}
        ></input>
        <button className="confirmationButton" onClick={() => this.onSubmit()}>
          Check Palindrome
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
