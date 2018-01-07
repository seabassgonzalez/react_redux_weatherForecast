// import React and Component from react

// export default class Searchbar extending component
	// initialize component state using contructor(props)
		// super(props)
		// set initial state this.state = object with a term

	// render
		// return
			// a form with className input-group
				// input component
				// use bootstrap styling span className input-group-btn
					// button component type submit className btn btn-secondary

import React, { Component } from 'react';

export default class SearchBar extends Component {
	render(){
		return(
			<form className='input-group'>
				<input />
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}