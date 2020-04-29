import { COORDINATES_CLICKED } from "../actions/types";

export default (state = [15, 0], action) => {
  switch (action.type) {
    case COORDINATES_CLICKED:
      return action.payload;
    default:
      return state;
  }
};
