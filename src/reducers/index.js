import { combineReducers } from "redux";
import clickedCoordinatesReducer from "./clickedCoordinatesReducer";
import fetchedCountry from "./fetchedCountryReducer";
import moviesReducers from "./moviesReducers";
import infoWindowReducer from "./infoWindowReducer";

export default combineReducers({
  clickedCoordinates: clickedCoordinatesReducer,
  fetchedCountry: fetchedCountry,
  movies: moviesReducers,
  infoWindowOn: infoWindowReducer,
});
