import React from "react";
import { shallow } from "enzyme";
import MovieList from "./MovieList";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}, initialProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<MovieList store={store} {...initialProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("MovieList", () => {
  describe("redux props", () => {
    let state, props, wrapper;

    beforeEach(() => {
      state = {
        movies: [
          { Title: "Life Is Beautiful", imdbID: 1 },
          { Title: "Cinema Paradiso", imdbID: 2 },
        ],
      };
      props = {
        history: { location: { pathname: "/Italy" } },
        match: { params: { country: "Italy" } },
      };
      wrapper = setup(state, props);
    });

    test("renders without errors", () => {
      expect(wrapper.length).toEqual(1);
    });

    test("has movies prop", () => {
      const moviesProp = wrapper.instance().props.movies;
      expect(moviesProp).toEqual(state.movies);
    });
  });
});
