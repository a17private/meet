import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventCount: 32,
  };

  // change number of events list
  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: "",
        errorText: `Select number between 1 and 32`,
      });
    } else if (eventCount > 32) {
      return this.setState({
        eventCount: "",
        errorText: `Select number between 1 and 32`,
      });
    } else {
      this.setState({
        eventCount,
        errorText: "",
      });
      // this.props.updateEvents("", eventCount);
    }
  };

  render() {
    return (
      <div className="number-of-events">
        <p className="resultNr">Number of results:</p>
        <input 
          type="number"
          className="eventNumber"
          value={this.props.numberOfEvents}
          onChange={(e) => this.updateEventCount(e.target.value)}
        />
       <ErrorAlert text={this.state.errorText} />
      </div>
    )
  }
}

export default NumberOfEvents;