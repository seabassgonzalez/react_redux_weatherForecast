// container that needs to call an action creator working with redux directly
//  use connect method from react-redux library to connect searchbar container to redux
//  bind action creator fetch weather as a property to this container


// import React and Component from react
// import connect from react-redux
// import bindActionCreators from redux
// import fetchWeather form actions

// class Searchbar extending component
	// initialize component state using contructor(props)
		// super(props)
		// set initial state this.state = object with a term
		// bind context of onInputChange to proper instance of this, overriding improper local method
		// bind context of onFormSubmit to proper instance, otherwise this will be null

	// onInputChange method to handle event object
		// console.log value of input whenever user changes it
		// 	setState to object with term: event.target.value

	// onFormSubmit method to handle event
		// use event object to prevent browser from trying to submit the form
		// call this.props.fetchWeather action creator passing in city set as this.state.term
		// clear search input by using this.setState({term:''}) term set to empty string

	// render
		// return
			// a form with className input-group, html forms automatically register an 'enter' as form submit, must control using onSubmit callback this.onFormSubmit
				// input component with change handler
					// placeholder message to user
					// className of form-control
					// turn to controlled component by assigning value object this.state.term
					// onChange run callback this.onInputChange object -- need to properly bind this to instance
				// use bootstrap styling span className input-group-btn
					// button component type submit className btn btn-secondary

// by mapping action creator fetchWeather to dispatch and then mapping it to props, we get access to function this.props.fetchweather:

// create function mapStateToProps to bind fetchWeather to searchbar container
	// return call to bindActionCreators({fetchWeather}, dispatch) -- causes when action creator called and returns an action bindActionCreators with dispatch makes sure that action flows down into the middleware and the into the reducers in our redux application

// export default connect(null, mapDispatchToProps)(SearchBar) -- maps searchbar to props -- null allows ignore of first argument passed, state, since only care about second argument mapDispatchToProps as per docs

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		// console.log('The value of the input is: ' + event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 
					placeholder="Enter a city for a five day forecast"
					className='form-control'
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);