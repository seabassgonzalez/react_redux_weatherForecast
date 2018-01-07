// import React and Component from react

// export default class Searchbar extending component
	// initialize component state using contructor(props)
		// super(props)
		// set initial state this.state = object with a term

	// onInputChange method to handle event object
		// console.log value of input whenever user changes it
		// 	setState to object with term: event.target.value

	// render
		// return
			// a form with className input-group
				// input component with change handler
					// placeholder message to user
					// className of form-control
					// turn to controlled component by assigning value object this.state.term
					// onChange run this.onInputChange object
				// use bootstrap styling span className input-group-btn
					// button component type submit className btn btn-secondary

import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: '' };
	}

	onInputChange(event){
		console.log('The value of the input is: ' + event.target.value);
		this.setState({ term: event.target.value });
	}

	render(){
		return(
			<form className='input-group'>
				<input 
					placeholder="Enter a city for a five day forecast"
					className='form-control'
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}