// import React and Component from react
// import connect from react-redux -- pull date in from redux
// import chart from ../components/chart
// import GoogleMap from '../components/google_map'

// class WeatherList extending Component
	// define renderWeather function first argument for each call will be object of city data
		// define const for reference to city name -- to be dry
		// define const temps accessing cityData.list map over it passing a function argument weather and access temperature with weather.main.temp -- map over it and conver to celsius
		// define const for pressures mapping over cityData.list passing a function that takes weather and accesses weather.main.pressure from returned data
		// define const for humidity mapping over cityData.list passing a function that takes weather and accesses weather.main.humidity from returned data
		// define const to access Google longitude for map centering cityData.city.coord.lon 
		// define const to access Google latitude for map centering cityData.city.coord.lat

		// returns
			// tr with a key by accessing {name}
				// td reference to GoogleMap component, passing long and lat properties
				// td
					// Chart component with data set to temps and color specified units=K
				// td
					// Chart component with data set to pressures and color specified units=hPa
				// td
					// Chart component with data set to humidities and color specified units=%
					
	// render		
		// return
			// table className table table-hover from bootstrap
				// table head
					// tr
						// th City
						// th Temperature specifying kelvin
						// th Pressure specifying hpa
						// th Humidity specifying percentage
				// tbody
					// reference this.props.weather map over it, call function this.renderWeather for each

// define mapStateToProps function taking state -- es6 syntactical sugar allows passing 
// mapStateToProps(state){const weather = state.weather } SAME AS mapStateToProps({ weather }){}
	// return object weather: state.weather because we assigned the weather key to the weather reducer in combineReducers
	// es6 syntax allows { weather: weather } SAME AS { weather }

// export default connect mapStateToProps with component WeatherList

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp => temp - 273));
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		// console.log(temps);
		// console.log('lon is ', lon);
		// console.log('lat is ', lat);
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td> 
				<td>
					<Chart data={temps} color="orange" units="C"/>
				</td> 
				<td>
					<Chart data={pressures} color="blue" units="hPa"/>
				</td> 
				<td>
					<Chart data={humidities} color="green" units="%"/>
				</td> 
			</tr>
		); 
	}
    //comment to clean up syntax highlighting
	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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
