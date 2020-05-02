import React from "react";
import { shallow } from "enzyme";
import SubHeader from "./SubHeader";
import { findByTestAttr } from "../../../test/testUtils";

describe("SubHeader", () => {
  let wrapper;

  describe("when home", () => {
    beforeEach(() => {
      wrapper = shallow(<SubHeader location={{ pathname: "/" }} />);
    });

    test("renders the homepage description", () => {
      const description = findByTestAttr(wrapper, "sub-header-description");
      expect(description.length).toEqual(1);
    });

    test("does not render the genre buttons", () => {
      const genreButtons = findByTestAttr(wrapper, "genre-buttons");
      expect(genreButtons.length).toEqual(0);
    });
  });

  describe("when not in home", () => {
    beforeEach(() => {
      wrapper = shallow(<SubHeader location={{ pathname: "/Italy" }} />);
    });

    test("does not render the homepage description", () => {
      const description = findByTestAttr(wrapper, "sub-header-description");
      expect(description.length).toEqual(0);
    });

    test("renders the genre buttons", () => {
      const genreButtons = findByTestAttr(wrapper, "genre-buttons");
      expect(genreButtons.length).toEqual(1);
    });
  });
});
