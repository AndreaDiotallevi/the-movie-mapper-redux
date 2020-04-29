import { COUNTRY_NOT_FETCHED, COORDINATES_CLICKED } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case COUNTRY_NOT_FETCHED:
      return true;
    case COORDINATES_CLICKED:
      return false;
    default:
      return state;
  }
};
