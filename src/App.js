import React, { Component } from "react";
import "./App.css";
import Country from './Country'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(json => {
      this.setState({data: json})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <ul>
          {this.state.data.map(d => <Country name={d.name} /> )}
        </ul>
      </div>
    );
  }
}

export default App;
