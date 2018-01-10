// import React and Component from react
// import connect from react-redux -- pull date in from redux

// class WeatherList extending Component
	// define renderWeather function first argument for each call will be object of city data
		// define const for reference to city name -- to be dry
		// define const temps accessing cityData.list map over it passing a function argument weather and access temperature with weather.main.temp 
		// returns
			// tr with a key by accessing {name}
				// td reference to {name} as per object returned by ajax request
	// render
		// return
			// table className table table-hover from bootstrap
				// table head
					// tr
						// th City
						// th Temperature
						// th Pressure
						// th Humidity
				// tbody
					// reference this.props.weather map over it, call function this.renderWeather for each

// define mapStateToProps function taking state -- es6 syntactical sugar allows passing 
// mapStateToProps(state){const weather = state.weather } SAME AS mapStateToProps({ weather }){}
	// return object weather: state.weather because we assigned the weather key to the weather reducer in combineReducers
	// es6 syntax allows { weather: weather } SAME AS { weather }

// export default connect mapStateToProps with component WeatherList

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temp = cityData.list.map(weather => weather.main.temp);
		return (
			<tr key={name}>
				<td>{name}</td> 
			</tr>
		); 
	}

	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
