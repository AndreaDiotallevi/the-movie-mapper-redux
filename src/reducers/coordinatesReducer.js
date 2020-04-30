import { COORDINATES_FETCHED } from "../actions/types";

export default (state = [15, 0], action) => {
  switch (action.type) {
    case COORDINATES_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
