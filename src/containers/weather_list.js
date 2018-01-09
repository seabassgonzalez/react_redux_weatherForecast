// import React and Component from react

// export default class WeatherList extending Component
	// render
		// return
			// table
				// table head
					// tr
						// th City
				// tbody

import React, { Component } from 'react';

export default class WeatherList extends Component{
	render(){
		return (
			<table>
				<thead>
					<tr>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		);
	}
}