// import React and Component from react

// export default class WeatherList extending Component
	// render
		// return
			// table className table table-hover from bootstrap
				// table head
					// tr
						// th City
				// tbody

import React, { Component } from 'react';

export default class WeatherList extends Component{
	render(){
		return (
			<table className='table table-hover'>
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