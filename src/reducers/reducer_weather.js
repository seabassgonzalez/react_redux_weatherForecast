// export reducer - function that take particular state its responsible for, set to null, and an action
	// console.log action received for testing
	// return state

export default function(state = null, action){
	console.log('Action received: ', action);
	return state;
}