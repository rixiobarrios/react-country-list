import React, { Component } from 'react';

class Country extends Component {

	constructor() {
		super()

		this.state = {
			capital: null
		}

		this.getCapital = this.getCapital.bind(this)

	}

	getCapital() {
		fetch(`https://restcountries.eu/rest/v2/name/${this.props.name}`)
		.then(res => res.json())
		.then(json => {
			console.log(json)
			this.setState({capital: json[0].capital})
		})
	}

	shouldComponentUpdate() {

	}

	render() {
		
		const capital = this.state.capital ? <p>{this.state.capital}</p> : null

		return (
			<div onClick={this.getCapital}>
				<h1>{this.props.name}</h1>
				{capital}
				
			</div>
		);
	}
}

export default Country;