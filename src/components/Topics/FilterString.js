import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "Why don't we all introduce ourselves!",
        "My name is Joe, and I hate pie. With a passion.",
        "Theo isn't too bright - he literally fell off a cliff!",
        "I'm going to figuratively burn your house down, Jack."
      ],
      userInput: "",
      filteredArray: []
    };
  }
  onInputChange(event) {
    this.setState({ userInput: event.target.value });
  }
  onSubmit() {
    let filteredArray = [];
    const { unFilteredArray, userInput } = this.state;

    unFilteredArray.forEach((sentence) => (sentence.includes(userInput) ? filteredArray.push(sentence) : null));

    this.setState({ filteredArray, unFilteredArray, userInput });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input
          className="inputLine"
          onChange={(event) => this.onInputChange(event)}
          value={this.state.userInput}
        ></input>
        <button className="confirmationButton" onClick={() => this.onSubmit()}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterString;
