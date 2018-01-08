// import React from react
// import ReactDOM from react-dom
// import Provider from react-redux
// import createStore and applyMiddleware from redux
// import reduxpromise from redux-promise
// import App
// import reducers

// create const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// ReactDOM.render
	// Provider store object - createStoreWithMiddleware(reducers)
		// App Component
	// at DOM container component

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
