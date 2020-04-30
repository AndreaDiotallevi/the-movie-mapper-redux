import axios from "axios";
import countryCodesJson from "../utils/countryCodes.json";
import movieTitlesJson from "../utils/movieTitles.json";
import history from "../history";
import {
  COORDINATES_CLICKED,
  COUNTRY_FETCHED,
  COUNTRY_NOT_FETCHED,
  MOVIE_FETCHED,
} from "./types";

export const fetchCountryFromClick = (t, map, coord) => async (
  dispatch,
  getState
) => {
  await dispatch(clickCoordinates(t, map, coord));
  const coordinates = getState().clickedCoordinates;
  await dispatch(fetchCountryFromCoordinates(coordinates));
};

export const clickCoordinates = (t, map, coord) => {
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();

  return {
    type: COORDINATES_CLICKED,
    payload: [lat, lng],
  };
};

export const fetchCountryFromCoordinates = (clickedCoordinates) => async (
  dispatch
) => {
  const [lat, lng] = clickedCoordinates;
  try {
    const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATION_API;
    const response = await axios.get(
      `https://us1.locationiq.com/v1/reverse.php?key=${LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lng}&format=json`
    );

    const countryCode = response.data.address.country_code;
    const country = countryCodesJson[countryCode];
    dispatch({ type: COUNTRY_FETCHED });
    history.push(`${country}`);
  } catch (err) {
    dispatch({ type: COUNTRY_NOT_FETCHED });
  }
};

export const fetchMoviesFromCountry = (country) => async (dispatch) => {
  const movieTitles = movieTitlesJson[country] || [];
  movieTitles.forEach((title) => dispatch(fetchMovie(title)));
  history.push(`${country}`);
};

export const fetchMovie = (title) => async (dispatch) => {
  const titleUrl = title.toLowerCase().split(" ").join("-");
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API;
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${titleUrl}`
  );

  dispatch({ type: MOVIE_FETCHED, payload: response.data });
};
