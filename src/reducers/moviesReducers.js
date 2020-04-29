import { COUNTRY_FETCHED, MOVIE_FETCHED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case COUNTRY_FETCHED:
      return [];
    case MOVIE_FETCHED:
      return [...state, action.payload];
    default:
      return state;
  }
};
