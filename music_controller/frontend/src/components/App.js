import React, { Component } from "react";
import { render } from "react-dom";
// import HomePage from "./HomePage"; // keep this commented or remove

export default class App extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);