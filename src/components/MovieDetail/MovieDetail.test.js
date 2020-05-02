import React from "react";
import { shallow } from "enzyme";
import MovieDetail from "./MovieDetail";
import { findByTestAttr } from "../../../test/testUtils";

describe("MovieDetail", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MovieDetail
        imdbID={1}
        title={"Life Is Beautiful"}
        plot={"Plot"}
        posterURL={"https://posterURL"}
        releaseDate={"12 Feb 1999"}
      />
    );
  });

  test("renders the movie's poster", () => {
    const poster = findByTestAttr(wrapper, "movie-poster-url-1");
    expect(poster.props().src).toEqual("https://posterURL");
  });

  test("renders the movie's hyperlink", () => {
    const hyperlink = findByTestAttr(wrapper, "movie-title-anchor-1");
    expect(hyperlink.props().href).toEqual("https://www.imdb.com/title/1/");
  });

  test("renders the movie's title", () => {
    const title = findByTestAttr(wrapper, "movie-title-1");
    expect(title.text()).toEqual("Life Is Beautiful");
  });

  test("renders the movie's plot", () => {
    const plot = findByTestAttr(wrapper, "movie-plot-1");
    expect(plot.text()).toEqual("Plot");
  });

  test("renders the movie's release date", () => {
    const releaseDate = findByTestAttr(wrapper, "movie-release-date-1");
    expect(releaseDate.text()).toEqual("12 Feb 1999");
  });
});
