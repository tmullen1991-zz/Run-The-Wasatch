import React, { Component } from "react";
import API from "./utils/api";
import Map from "./components/map"
import "./App.css";

class App extends Component {
 
  componentDidMount() {
    
  }
 
  render() {
    return (
      <div>
        it works!!
        <Map />
      </div>
    );
  }
}

export default App;
