import locationiq from "../apis/locationiq";
import omdb from "../apis/omdb";

import countryCodesJson from "../utils/countryCodes.json";
import movieTitlesJson from "../utils/movieTitles.json";

const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATION_API;
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API;

export const fetchMoviesFromClick = (t, map, coord) => async (
  dispatch,
  getState
) => {
  await dispatch(clickCoordinates(t, map, coord));

  const coordinates = getState().clickedCoordinates;
  await dispatch(fetchCountry(coordinates));

  const country = getState().fetchedCountry;
  const movieTitles = movieTitlesJson[country];
  movieTitles.forEach((title) => dispatch(fetchMovie(title)));
};

export const clickCoordinates = (t, map, coord) => {
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();

  console.log("Clicked coordinates: ", [lat, lng]);

  return {
    type: "COORDINATES_CLICKED",
    payload: [lat, lng],
  };
};

export const fetchCountry = (clickedCoordinates) => async (dispatch) => {
  const [lat, lng] = clickedCoordinates;
  const response = await locationiq.get(
    `/reverse.php?key=${LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lng}&format=json`
  );

  const countryCode = response.data.address.country_code;
  const country = countryCodesJson[countryCode];

  console.log("Country: ", country);

  dispatch({ type: "COUNTRY_FETCHED", payload: country });
};

export const fetchMovie = (title) => async (dispatch) => {
  const titleUrl = title.toLowerCase().split(" ").join("-");
  const response = await omdb.get(`/?apikey=${OMDB_API_KEY}&t=${titleUrl}`);

  dispatch({ type: "MOVIE_FETCHED", payload: response.data });
};
