// save api key as const
// save root URL as const for ajax get request to it and return our data, get url from docs, use es6 to reference api key

// export const FETCH_WEATHER type as string to keep action types consistent between action creators and reducers and minimize likelihood of differences or mistakes

// export function fetchWeather action creator
	// return
		// type set to fetch weather variable
		
const API_KEY='8b4f27dea26e093bf2ddbb6bfea22ad6';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
	return {
		type: FETCH_WEATHER
	};
}