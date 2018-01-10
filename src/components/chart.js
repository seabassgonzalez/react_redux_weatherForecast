// dont need to track of component state, just props come in and render a component

// import React from react
// import Sparklines, SparklinesLine, and SparklinesReferenceLine from react-sparklines
// import _ from lodash to calculate average

// create function to calculate average, taking data
	// return
		// sum of data divided by length of data = average, round it off also

// export default (props) function
	// return
		// div
			// Sparklines height width and data set to array of temps, but no access to temps anymore to will access as props.data
				// SparklinesLine setting code as {props.color} to change at will
				// SparklinesReferenceLine type of avg for average
				// div
					// call helper function average passing array of numbers into it with props.data and a call to props.units to see units passed

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return(
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}