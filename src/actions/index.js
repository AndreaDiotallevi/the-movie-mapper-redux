import axios from "axios";
import countryCodesJson from "../utils/countryCodes.json";
import movieTitlesJson from "../utils/movieTitles.json";
import history from "../history";
import {
  COORDINATES_FETCHED,
  COUNTRY_CODE_FETCHED,
  COUNTRY_CODE_NOT_FETCHED,
  COUNTRY_FETCHED,
  MOVIE_TITLES_FETCHED,
  MOVIE_DATA_FETCHED,
} from "./types";

export const fetchCoordinates = (t, map, coord) => {
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();
  return {
    type: COORDINATES_FETCHED,
    payload: [lat, lng],
  };
};

export const fetchCountryCode = (coordinates) => async (dispatch) => {
  const [lat, lng] = coordinates;
  try {
    const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATION_API;
    const response = await axios.get(
      `https://us1.locationiq.com/v1/reverse.php?key=${LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lng}&format=json`
    );
    dispatch({
      type: COUNTRY_CODE_FETCHED,
      payload: response.data.address.country_code,
    });
  } catch (err) {
    dispatch({ type: COUNTRY_CODE_NOT_FETCHED });
  }
};

export const fetchCountry = (countryCode) => {
  return {
    type: COUNTRY_FETCHED,
    payload: countryCodesJson[countryCode],
  };
};

export const fetchMovieTitles = (country) => {
  const movieTitles = movieTitlesJson[country] || [];
  return {
    type: MOVIE_TITLES_FETCHED,
    payload: movieTitles,
  };
};

export const fetchMovieData = (title) => async (dispatch) => {
  const titleUrl = title.toLowerCase().split(" ").join("-");
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API;
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${titleUrl}`
  );
  dispatch({ type: MOVIE_DATA_FETCHED, payload: response.data });
};

export const fetchCoordinatesCountryCodeAndCountry = (t, map, coord) => async (
  dispatch,
  getState
) => {
  await dispatch(fetchCoordinates(t, map, coord));
  const coordinates = getState().coordinates;
  await dispatch(fetchCountryCode(coordinates));
  const countryCode = getState().countryCode;
  if (countryCode !== "") {
    dispatch(fetchCountry(countryCode));
    const country = getState().country;
    history.push(`${country}`);
  }
};

export const fetchMovieTitlesAndMovieData = (country) => (
  dispatch,
  getState
) => {
  dispatch(fetchMovieTitles(country));
  const movieTitles = getState().movieTitles;
  movieTitles.forEach((title) => dispatch(fetchMovieData(title)));
};
