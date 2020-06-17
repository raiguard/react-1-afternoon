import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { name: "Charles", age: 21, favoriteFood: "Hawaiian Haystacks" },
        { name: "Amanda", age: 20, gender: "Female", likesSports: true },
        { name: "Schloop", isHuman: false, gender: "Undefined", favoriteFood: "Industrial Motor Oil" }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  onInputChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  onSubmit() {
    let filteredArray = [];
    const { unFilteredArray, userInput } = this.state;

    unFilteredArray.forEach((obj) => (obj.hasOwnProperty(userInput) ? filteredArray.push(obj) : null));

    this.setState({
      filteredArray,
      unFilteredArray,
      userInput
    });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input
          className="inputLine"
          onChange={(event) => this.onInputChange(event)}
          value={this.state.userInput}
        ></input>
        <button className="confirmationButton" onClick={() => this.onSubmit()}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterObject;
