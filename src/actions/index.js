import locationiq from "../apis/locationiq";
import omdb from "../apis/omdb";
import countryCodesJson from "../utils/countryCodes.json";
import movieTitlesJson from "../utils/movieTitles.json";
import history from "../history";
import {
  COORDINATES_CLICKED,
  COUNTRY_FETCHED,
  COUNTRY_NOT_FETCHED,
  MOVIE_FETCHED,
} from "./types";

const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATION_API;
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API;

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

  console.log("Clicked coordinates: ", [lat, lng]);

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
    const response = await locationiq.get(
      `/reverse.php?key=${LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lng}&format=json`
    );

    const countryCode = response.data.address.country_code;
    const country = countryCodesJson[countryCode];

    console.log("Country: ", country);

    dispatch({ type: COUNTRY_FETCHED, payload: country });
    history.push(`${country}`);
  } catch (err) {
    dispatch({ type: COUNTRY_NOT_FETCHED });
  }
};

export const fetchMoviesFromCountry = (country) => async (dispatch) => {
  const movieTitles = movieTitlesJson[country];
  movieTitles.forEach((title) => dispatch(fetchMovie(title)));
  history.push(`${country}`);
};

export const fetchMovie = (title) => async (dispatch) => {
  const titleUrl = title.toLowerCase().split(" ").join("-");
  const response = await omdb.get(`/?apikey=${OMDB_API_KEY}&t=${titleUrl}`);

  dispatch({ type: MOVIE_FETCHED, payload: response.data });
};
