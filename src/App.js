import React, { Component } from "react";
import Country from "./Country";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({ data: json });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <ul>
          {this.state.data.map(country => (
            <Country key={country.name} name={country.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
