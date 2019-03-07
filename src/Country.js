import React, { Component } from "react";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = { capital: "" };

    this.getCapital = this.getCapital.bind(this);
  }

  getCapital(e) {
    e.preventDefault();
    // console.log("hi");
    const countryName = this.props.name;
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState(
          {
            capital: res[0].capital
          },
          () => console.log(this.state)
        );
      });
  }

  render() {
    let capital;

    if (this.state.capital) {
      capital = (
        <ul>
          <li>{`Capital: ${this.state.capital}`}</li>
        </ul>
      );
    } else {
      capital = <button onClick={this.getCapital}>{"Get Capital"}</button>;
    }

    return (
      <div>
        <li>{this.props.name}</li>
        {capital}
      </div>
    );
  }
}

export default Country;
