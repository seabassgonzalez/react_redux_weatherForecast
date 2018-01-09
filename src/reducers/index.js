// import combineReducers form redux
// import WeatherReducer from ./reducer_weather

// create const rootReducer = combineReducers
	// set weather state to WeatherReducer

// export rootReducer

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
