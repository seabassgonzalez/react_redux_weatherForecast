// import combineReducers form redux

// create const rootReducer = combineReducers
	// state set to initial object

// export rootReducer

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
