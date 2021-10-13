import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventCount={() => {}} />)
  });

  test('render NumberOfEvents', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('render 8 events', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.eventNumber').prop('value')).toBe(numberOfEvents);
  });

  test('change number of events with input value', () => {
    const inputValue = { target: { value: 20}};
    NumberOfEventsWrapper.find('.eventNumber').simulate('change', inputValue);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(20);
  });
});