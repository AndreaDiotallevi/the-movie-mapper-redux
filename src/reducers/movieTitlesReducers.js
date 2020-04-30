import { MOVIE_TITLES_FETCHED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case MOVIE_TITLES_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
