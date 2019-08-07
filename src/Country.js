import React, { Component } from "react";

class Country extends Component {
  // 1. Define constructor to set up initial state for the component.
  // We want to render the component, then make the ajax call to our
  // API to get the data we need
  constructor() {
    super();

    this.state = {
      capital: null
    };
  }

  // 2. Inside of componentDidMount, we make our ajax call (using fetch),
  // then we convert the response to json using res.json(), then we update
  // our state with the data in our json response. In this case, we're pulling
  // just the capital out of the country object and setting that to our state.
  // Calling this.setState triggers a rerender (update) of our component.
  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/name/${this.props.name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          capital: data[0].capital
        });
      });
  }

  // 3. render get's called twice - once initially (when capital is set to null)
  // and again when we call setState inside of componentDidMount(). The second
  // time it gets called, we'll have a value from our API that we can render to
  // the DOM (the capital of the current country)
  render() {
    return (
      <li>
        {this.props.name} - {this.state.capital}
      </li>
    );
  }
}

export default Country;
