import {
  COUNTRY_CODE_FETCHED,
  COUNTRY_CODE_NOT_FETCHED,
} from "../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case COUNTRY_CODE_FETCHED:
      return action.payload;
    case COUNTRY_CODE_NOT_FETCHED:
      return "";
    default:
      return state;
  }
};
