import React, { Component } from "react";
import "./App.css";
import Country from './Country'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryData: []
    }
  }

  componentDidMount(evt) {
    // GET Request
    fetch('https://restcountries.eu/rest/v2/all')
      .then( response => response.json() )
      .then( (parsedJson) => {
        this.setState({
          countryData: parsedJson
        })
      } )
  }

  render() {
    // Helper functions, because they can access props and state!
    // This will work
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        {/* JSX comment, yowza */}
        <ul>
          { this.state.countryData.map( (country, index) => {
            return <Country 
                      key={ index } 
                      name={country.name} 
                      borders={country.borders} />
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
