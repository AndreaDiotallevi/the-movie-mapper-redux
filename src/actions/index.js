import locationiq from "../apis/locationiq";
import countryCodes from "../utils/countryCodes.json";
const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATION_API;

export const clickCoordinatesAndFetchCountry = (t, map, coord) => async (
  dispatch,
  getState
) => {
  await dispatch(clickCoordinates(t, map, coord));

  const coordinates = getState().clickedCoordinates;

  dispatch(fetchCountry(coordinates));
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
    `reverse.php?key=${LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lng}&format=json`
  );

  const countryCode = response.data.address.country_code;
  const country = countryCodes[countryCode];

  console.log("Country: ", country);

  dispatch({ type: "COUNTRY_FETCHED", payload: country });
};
