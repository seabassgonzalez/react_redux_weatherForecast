// import FETCH_WEATHER '../actions/index'

// export reducer - function that take particular state its responsible for, set to an empty array because pieces of weather data should be stored as an array, and an action
	// console.log action received for testing
	// setup a switch statement to handle action
		// case FETCH_WEATHER
			// handle payload -- return a new instance of state - -array that accumulates weather data for many searches -- state is an array, concat action.payload.data array onto it, new array each time NOT mutating state
			// es6 syntax sugar shows can be equivalent return [ action.payload.data, ...state ] -- will also return [city, city, city]
	// return state

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	// console.log('Action received: ', action);
	switch (action.type){
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			return [ action.payload.data, ...state ];
	}
	return state;
}