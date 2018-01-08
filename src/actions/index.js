// import axios from axios

// save api key as const
// save root URL as const for ajax get request to it and return our data, get url from docs, use es6 template strings - back ticks and bling - to reference api key

// export const FETCH_WEATHER type as string to keep action types consistent between action creators and reducers and minimize likelihood of differences or mistakes

// export function fetchWeather action creator taking city name
	// save const url with a query string to make final request url according to docs
	// save const request for ajax request axios.get(url) according to axios docs - basically make a get request on the url we saved 
	// return
		// type set to fetch weather variable

import axios from 'axios';
		
const API_KEY='8b4f27dea26e093bf2ddbb6bfea22ad6';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER
	};
}