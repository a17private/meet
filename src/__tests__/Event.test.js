import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let eventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    eventWrapper = shallow(<Event event={event} />);
  });

  // populate event details
  test('render correct event details', () => {
    expect(eventWrapper.find('.event')).toHaveLength(1);
  });

  // show event details
  test('render show event details', () => {
    eventWrapper.setState({ showhideDetails: true });
    eventWrapper.find('.show-details-btn').simulate('click');
    const eventDetails = eventWrapper.find('.eventDetails');
    expect(eventDetails).toHaveLength(1);
  });

  // hide event details
  test('render hide event details', () => {
    eventWrapper.setState({ showhideDetails: false });
    eventWrapper.find('.show-details-btn').simulate('click');
    const eventDetails = eventWrapper.find('.eventDetails');
    expect(eventDetails).toHaveLength(0);
  });
});