import React, { Component } from "react";

const style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: 300,
  height: 50,

  border: "3px solid black",
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 16,
  fontWeight: "bold",
  padding: 4
};

export default class InfoBox extends Component {
  render() {
    return (
      <div style={style}>
        <span>
          <a href={this.props.url}>{this.props.name}</a>
        </span>
        <span>
          <p>
            Difficulty: {this.props.difficulty}, Length: {this.props.length}
          </p>
        </span>
      </div>
    );
  }
}
