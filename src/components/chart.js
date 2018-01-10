// dont need to track of component state, just props come in and render a component

// import React from react
// import Sparklines and SparklinesLine from react-sparklines

// export default (props) function
	// return
		// div
			// Sparklines height width and data set to array of temps, but no access to temps anymore to will access as props.data
				// SparklinesLine setting code as {props.color} to change at will

import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
	return(
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
	);
}