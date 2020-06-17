import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      numer2: 0,
      sum: null
    };
  }
  onNum1InputChange(event) {
    this.setState({ number1: Number(event.target.value) });
  }
  onNum2InputChange(event) {
    this.setState({ number2: Number(event.target.value) });
  }
  onSubmit() {
    const { number1, number2 } = this.state;
    this.setState({ sum: number1 + number2 });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(event) => this.onNum1InputChange(event)}
          value={this.state.userInput}
        ></input>
        <input
          className="inputLine"
          onChange={(event) => this.onNum2InputChange(event)}
          value={this.state.userInput}
        ></input>
        <button className="confirmationButton" onClick={() => this.onSubmit()}>
          Check Sum
        </button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
