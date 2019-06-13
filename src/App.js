import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    const apiUrl = "https://restcountries.eu/rest/v2";
    fetch(`${apiUrl}/all`)
      .then(res => res.json())
      .then(countryData => {
        this.setState(
          prevState => ({
            countries: countryData
          }),
          _ => console.log(this.state.countries)
        );
      });
  }

  getCountryData = e => {
    e.preventDefault();
    const apiUrl = "https://restcountries.eu/rest/v2";
    fetch(`${apiUrl}/all`)
      .then(res => res.json())
      .then(countryData => {
        this.setState(
          prevState => ({
            countries: countryData
          }),
          _ => console.log(this.state.countries)
        );
      });
  };

  render() {
    const countryComponents = this.state.countries.map((country, index) => {
      return <li key={index}>{country.name}</li>;
    });

    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <ul>{this.state.countries && countryComponents}</ul>
      </div>
    );
  }
}

export default App;
