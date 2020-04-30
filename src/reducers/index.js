import { combineReducers } from "redux";
import coordinatesReducer from "./coordinatesReducer";
import countryCodeReducer from "./countryCodeReducer";
import countryReducer from "./countryReducer";
import movieTitlesReducers from "./movieTitlesReducers";
import moviesReducers from "./moviesReducers";
import infoWindowReducer from "./infoWindowReducer";

export default combineReducers({
  coordinates: coordinatesReducer,
  countryCode: countryCodeReducer,
  country: countryReducer,
  movieTitles: movieTitlesReducers,
  movies: moviesReducers,
  infoWindowOn: infoWindowReducer,
});
