// import React and Component from react
// import SearchBar from './src/containers/searchbar'

// export App class extending Component
	// render
		// return
			// div 
				// SearchBar component

import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';

export default class App extends Component {
	render(){
		return(
			<div>
				<SearchBar />
			</div>
		);
	}
}
