import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  onInputChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  onConfirm(event) {
    const inputArr = this.state.userInput.split(",");
    const { evenArray, oddArray } = this.state;

    inputArr.forEach((value) => {
      const valueNum = Number(value);
      if (valueNum % 2 === 0) {
        evenArray.push(valueNum);
      } else {
        oddArray.push(valueNum);
      }
    });

    this.setState({
      evenArray,
      oddArray
    });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(event) => this.onInputChange(event)}
          value={this.state.userInput}
        ></input>
        <button className="confirmationButton" onClick={(event) => this.onConfirm(event)}>
          Submit
        </button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
