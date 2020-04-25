import { combineReducers } from "redux";
import clickedCoordinatesReducer from "./clickedCoordinatesReducer";

export default combineReducers({
  clickedCoordinates: clickedCoordinatesReducer,
});
