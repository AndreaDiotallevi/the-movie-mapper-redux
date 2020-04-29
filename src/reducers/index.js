import { combineReducers } from "redux";
import clickedCoordinatesReducer from "./clickedCoordinatesReducer";
import moviesReducers from "./moviesReducers";
import infoWindowReducer from "./infoWindowReducer";

export default combineReducers({
  clickedCoordinates: clickedCoordinatesReducer,
  movies: moviesReducers,
  infoWindowOn: infoWindowReducer,
});
