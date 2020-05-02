import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { fetchCoordinates, fetchCountryCode } from "./";

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe("fetchCoordinates", () => {
  test("sets coordinates to state from user click on map", () => {
    const store = storeFactory();
    const latMock = jest.fn().mockImplementation(() => 44);
    const lngMock = jest.fn().mockImplementation(() => 10);
    store.dispatch(
      fetchCoordinates({}, {}, { latLng: { lat: latMock, lng: lngMock } })
    );
    const newState = store.getState();
    expect(newState.coordinates).toEqual([44, 10]);
  });
});

describe("fetchCountryCode action creator", () => {
  test("sets country code to state if clicked on a country", async () => {
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

  test("sets infoWindowOn to true if clicked on the sea", async () => {
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
