// import React and Component from react
// import connect from react-redux -- pull date in from redux

// class WeatherList extending Component
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

// define mapStateToProps function taking state -- es6 syntactical sugar allows passing 
// mapStateToProps(state){const weather = state.weather } SAME AS mapStateToProps({ weather }){}
	// return object weather: state.weather because we assigned the weather key to the weather reducer in combineReducers
	// es6 syntax allows { weather: weather } SAME AS { weather }

// export default connect mapStateToProps with component WeatherList

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
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
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
