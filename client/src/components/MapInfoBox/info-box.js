import React, { Component } from "react";
import "./style.css";

export default class InfoBox extends Component {
  render() {
    return (
      <div className="tool-tip">
        <div className="inner-text">
          <p>{this.props.name}</p>
          <p>
            Rated: {this.props.rating}/5 ({this.props.votes} votes)
            {this.props.difficulty === "green" ||
            this.props.difficulty === "greenBlue" ? (
              <img
                alt="green"
                src="https://cdn.apstatic.com/img/diff/greenBlk.svg"
                hspace="5"
              /> 
            ) : this.props.difficulty === "greenBlue" ? (
              <img
                alt="green"
                src="https://cdn.apstatic.com/img/diff/greenBlueBlk.svg"
                hspace="5"
              /> 
            ) : this.props.difficulty === "blue" ? (
              <img
                alt="green"
                src="https://cdn.apstatic.com/img/diff/blueBlk.svg"
                hspace="5"
              /> 
            ) : this.props.difficulty === "blueBlack" ? (
              <img
                alt="green"
                src="https://cdn.apstatic.com/img/diff/blueBlackBlk.svg"
                hspace="5"
              /> 
            ) : this.props.difficulty === "black" ? (
              <img
                alt="green"
                src="https://cdn.apstatic.com/img/diff/blackBlk.svg"
                hspace="5"
              /> 
            ) : (
              <img
                alt="green"
                src="https://cdn.apstatic.com/img/diff/dblackBlk.svg"
                hspace="5"
              /> 
            )}
             {this.props.length} Mi
          </p>
          <p>
            <a target="_blank" href={this.props.url}>Link to Trail Project</a>
          </p>
        </div>
      </div>
    );
  }
}
