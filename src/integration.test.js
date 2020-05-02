import { storeFactory } from "../test/testUtils";
import { fetchCoordinatesCountryCodeAndCountry } from "./actions";

describe("fetchCoordinatesCountryCodeAndCountry action dispatcher", () => {
  let store;
  const coordinates = [];
  const initialState = {};

  beforeEach(() => {
    store = storeFactory(initialState);
  });

  test("placeholder", () => {});
});
