// import React and Component from react

// export default class Searchbar extending component
	// initialize component state using contructor(props)
		// super(props)
		// set initial state this.state = object with a term

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