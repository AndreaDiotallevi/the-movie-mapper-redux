import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../../../test/testUtils";

describe("Header", () => {
  let wrapper;

  describe("when home", () => {
    beforeEach(() => {
      wrapper = shallow(<Header location={{ pathname: "/" }} />);
    });

    test("renders THE MOVIE MAPPER", () => {
      const header = findByTestAttr(wrapper, "header-title");
      expect(header.text()).toEqual("THE MOVIE MAPPER");
    });

    test("does not render the back home link", () => {
      const backHomeLink = findByTestAttr(wrapper, "back-home-link");
      expect(backHomeLink.length).toEqual(0);
    });
  });

  describe("when not in home", () => {
    beforeEach(() => {
      wrapper = shallow(<Header location={{ pathname: "/Italy" }} />);
    });

    test("renders WELCOME TO ITALY", () => {
      const header = findByTestAttr(wrapper, "header-title");
      expect(header.text()).toEqual("WELCOME TO ITALY");
    });

    test("renders the back home link", () => {
      const backHomeLink = findByTestAttr(wrapper, "back-home-link");
      expect(backHomeLink.length).toEqual(1);
    });
  });
});