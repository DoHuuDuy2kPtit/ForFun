import React from "react";
import "./App.css";
import Ceil from "./Component/Ceil";

export class App extends React.Component {
  state = {
    data: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: true,
  };

  handleOnClick = (x, y) => {
    if (this.state.data[x][y]) return;
    let newData = [...this.state.data];
    this.state.turn ? (newData[x][y] = "X") : (newData[x][y] = "O");
    this.setState({ data: newData, turn: !this.state.turn });
  };

  render() {
    return (
      <div>
        <div className="contains">
          <Ceil
            value={this.state.data[0][0]}
            handleOnClick={() => {
              this.handleOnClick(0, 0);
            }}
          />
          <Ceil
            value={this.state.data[0][1]}
            handleOnClick={() => {
              this.handleOnClick(0, 1);
            }}
          />
          <Ceil
            value={this.state.data[0][2]}
            handleOnClick={() => {
              this.handleOnClick(0, 2);
            }}
          />
        </div>
        <div className="contains">
          <Ceil
            value={this.state.data[1][0]}
            handleOnClick={() => {
              this.handleOnClick(1, 0);
            }}
          />
          <Ceil
            value={this.state.data[1][1]}
            handleOnClick={() => {
              this.handleOnClick(1, 1);
            }}
          />
          <Ceil
            value={this.state.data[1][2]}
            handleOnClick={() => {
              this.handleOnClick(1, 2);
            }}
          />
        </div>
        <div className="contains">
          <Ceil
            value={this.state.data[2][0]}
            handleOnClick={() => {
              this.handleOnClick(2, 0);
            }}
          />
          <Ceil
            value={this.state.data[2][1]}
            handleOnClick={() => {
              this.handleOnClick(2, 1);
            }}
          />
          <Ceil
            value={this.state.data[2][2]}
            handleOnClick={() => {
              this.handleOnClick(2, 2);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
