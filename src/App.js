import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header";
import OpenBook from "./Components/OpenBook";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OpenBook />
      </div>
    );
  }
}
