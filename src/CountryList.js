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
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            countries: res
          },
          () => console.log(this.state.countries)
        );
      });
  }

  render() {
    const countriesComponents = this.state.countries.map((country, id) => (
      <Country name={country.name} key={id} />
    ));

    return <ul>{this.state.countries && countriesComponents}</ul>;
  }
}

export default CountryList;
