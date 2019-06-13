import React, { Component } from "react";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capital: "",
      currencyCode: "",
      language: ""
    };
  }

  getCountryData = e => {
    e.preventDefault();
    const apiUrl = "https://restcountries.eu/rest/v2";
    fetch(`${apiUrl}/name/${this.props.country.name}`)
      .then(res => res.json())
      .then(countryData => {
        const { capital, currencies, languages } = countryData[0];
        this.setState(prevState => ({
          capital: capital,
          currencyCode: currencies[0].code,
          language: languages[0].name
        }));
      });
  };

  render() {
    let countryInfo;

    if (this.state.capital) {
      const { capital, currencyCode, language } = this.state;
      countryInfo = (
        <ul>
          <li>Capital: {capital}</li>
          <li>Currency Code: {currencyCode}</li>
          <li>Language: {language}</li>
        </ul>
      );
    } else {
      countryInfo = (
        <button onClick={this.getCountryData}>{"Get Country Info"}</button>
      );
    }

    return (
      <div>
        <li>{this.props.country.name}</li>
        {countryInfo}
      </div>
    );
  }
}

export default Country;
