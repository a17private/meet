// src/Event.js

import React, { Component } from "react";

class Event extends Component {
state = {
collapsed: false,
};

handleClickOnShowDetails = () => {
if (this.state.collapsed === true) {
this.setState({ collapsed: false });
} else {
this.setState({ collapsed: true });
}
};

render() {
const { event } = this.props;
return (
<div className="event">
<h2 className="summary">{event.summary}</h2>
<p className="start-date">
{event.start.dateTime} ({event.start.timeZone})
</p>

{this.state.collapsed || (
<div className='eventDetails hide' >
<h2>About event:</h2>
<p>{event.description}</p>
</div>
)}

<button
className="show-details-btn"
onClick={this.handleClickOnShowDetails}
>
{!this.state.collapsed ? 'Show Details' : 'Hide Details'}
</button>
</div>
);
}
}

export default Event;