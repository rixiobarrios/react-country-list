import React, { Component } from 'react';

class Country extends Component {

	constructor() {

	}

	getCapital() {

	}

	render() {
		
		// const capital = this.props.data.capital ? <p>{this.props.data.capital}</p> : null

		return (
			<div onClick={this.getCapital}>
				<h1>{this.props.name}</h1>

				{/* {capital} */}
				
			</div>
		);
	}
}

export default Country;