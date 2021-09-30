import React, { Component } from 'react';
import moment from 'moment';

class Month extends Component {
	render() {
		console.log('Events: ', this.props.events);

		let startDay = moment().startOf('month').format('YYYY-MM-DD');
		let endDay = moment().endOf('month').format('YYYY-MM-DD');

		console.log('startDay: ', startDay);
		console.log('endDay: ', endDay);

		let showDays = [];

		// Add all days
		for (
			let month = moment(startDay);
			month.isSameOrBefore();
			month.add(1, 'days')
		) {
			showDays.push(month.format('YYYY-MM-DD'));
		}
		console.log('showDays: ', showDays);

		return (
			<div>
				{this.props.events.map((eventItem, i) => (
					<div key={i}>
						{eventItem.todo}
						<br />
						<em>{eventItem.deadline}</em>
					</div>
				))}
			</div>
		);
	}
}

export default Month;
