import React, { Component } from "react";
import Country from "./Country";

class CountryList extends Component {
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
          _ => console.log("get all country data in Country#componentDidMount")
        );
      });
  }

  render() {
    const countryComponents = this.state.countries.map((country, index) => {
      return <Country country={country} key={index} />;
    });

    return <ul>{this.state.countries.length > 0 && countryComponents}</ul>;
  }
}

export default CountryList;
