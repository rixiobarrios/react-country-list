import React, { Component } from "react";
import "./App.css";
import CountryList from "./CountryList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <CountryList />
      </div>
    );
  }
}

export default App;
