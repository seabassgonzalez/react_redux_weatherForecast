// import React and Component from react

// class GoogleMap extends Component
	// componentDidMount
		// new google.maps.Map() taking this.refs.map and an object with two properties
			// zoom 12
			// center
				// lat this.props.lat
				// long this.props.long
	// render
		// return div with prop ref="map"
// export default GoogleMap

import React, { Component } from 'react';

class GoogleMap extends Component{
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render(){
		return <div ref="map" />;
	}
}

export default GoogleMap;