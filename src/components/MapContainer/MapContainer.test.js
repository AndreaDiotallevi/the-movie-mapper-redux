import React from "react";
import { shallow } from "enzyme";
import MapContainer from "./MapContainer";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<MapContainer store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("MapContainer", () => {
  describe("redux props", () => {
    let state, props, wrapper;

    beforeEach(() => {
      state = {
        coordinates: [44, 10],
        infoWindowOn: false,
      };
      wrapper = setup(state, props);
    });

    test("renders without errors", () => {
      expect(wrapper.length).toEqual(1);
    });
  });
});
