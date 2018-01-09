// import FETCH_WEATHER '../actions/index'

// export reducer - function that take particular state its responsible for, set to an empty array because pieces of weather data should be stored as an array, and an action
	// console.log action received for testing
	// setup a switch statement to handle action
		// case FETCH_WEATHER
			// handle payload -- return a new instance of state - -array that accumulates weather data for many searches -- state is an array, concat action.payload.data array onto it
	// return state

export default function(state = [], action){
	console.log('Action received: ', action);
	return state;
}