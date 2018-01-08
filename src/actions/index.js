// save api key as const

// export const FETCH_WEATHER type as string to keep action types consistent between action creators and reducers

// export function fetchWeather action creator
	// return
		// type set to fetch weather variable
		
const API_KEY='8b4f27dea26e093bf2ddbb6bfea22ad6';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
	return{
		type: FETCH_WEATHER
	};
}