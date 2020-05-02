import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  test("renders without errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
