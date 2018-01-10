// import React and Component from react
// import SearchBar from '../containers/searchbar'
// import WeatherList from '../containers/weather_list'

// export App class extending Component
	// render
		// return
			// div 
				// SearchBar component
				// WeatherList component

import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
	render(){
		// console.log('map in app component is ', google.maps);
		return(
			<div>
				<SearchBar />
				<WeatherList />
			</div>
		);
	}
}
