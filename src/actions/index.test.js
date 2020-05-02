import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { fetchCountryCode } from "./";

describe("fetchCountryCode action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("adds country code to state", async () => {
    const coordinates = [44.59117130368516, 10.65088757396451];
    const store = storeFactory();
    console.log(store.getState());

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
});
