import moxios from "moxios";

import { storeFactory } from "../test/testUtils";
import {
  fetchCoordinates,
  fetchCountryCode,
  fetchCountry,
  fetchMovieTitles,
  fetchMovieData,
} from "./actions";

jest.mock("./utils/movieTitles.json");
jest.mock("./utils/countryCodes.json");

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe("fetchCoordinates", () => {
  test("adds coordinates to state from user click on map", () => {
    const store = storeFactory();
    const latMock = jest.fn().mockImplementation(() => 44); // Italy
    const lngMock = jest.fn().mockImplementation(() => 10); // Italy
    store.dispatch(
      fetchCoordinates({}, {}, { latLng: { lat: latMock, lng: lngMock } })
    );
    const newState = store.getState();
    expect(newState.coordinates).toEqual([44, 10]);
  });
});

describe("fetchCountryCode action creator", () => {
  test("adds countryCode to state if clicked on a country", async () => {
    const coordinates = [44, 10]; // Italy
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { address: { country_code: "it" } },
      });
    });

    await store.dispatch(fetchCountryCode(coordinates));
    const newState = store.getState();
    expect(newState.countryCode).toBe("it");
  });

  test("sets infoWindowOn to true to state if clicked on the sea", async () => {
    const coordinates = [44, -21]; // Sea
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { error: "Unable to geocode" },
      });
    });

    await store.dispatch(fetchCountryCode(coordinates));
    const newState = store.getState();
    expect(newState.infoWindowOn).toBe(true);
  });
});

describe("fetchCountry action creator", () => {
  test("adds the country to state", () => {
    const store = storeFactory();
    store.dispatch(fetchCountry("it"));
    const newState = store.getState();
    expect(newState.country).toEqual("Italy");
  });
});

describe("fetchMovieTitles action creator", () => {
  test("adds the movie titles to state", () => {
    const store = storeFactory();
    store.dispatch(fetchMovieTitles("Italy"));
    const newState = store.getState();
    expect(newState.movieTitles.length).not.toEqual(0);
  });
});

describe("fetchMovieData action creator", () => {
  test("adds the movie data to state", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          Title: "Life Is Beautiful",
          Released: "12 Feb 1999",
        },
      });
    });

    await store.dispatch(fetchMovieData("Life Is Beautiful"));
    const newState = store.getState();
    expect(newState.movies[0].Title).toEqual("Life Is Beautiful");
    expect(newState.movies[0].Released).toEqual("12 Feb 1999");
  });
});
