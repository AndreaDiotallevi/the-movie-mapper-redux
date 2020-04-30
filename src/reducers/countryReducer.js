import { COUNTRY_FETCHED } from "../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case COUNTRY_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
