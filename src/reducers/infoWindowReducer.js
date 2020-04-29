export default (state = false, action) => {
  switch (action.type) {
    case "NO_COUNTRY_FETCHED":
      return true;
    case "COORDINATES_CLICKED":
      return false;
    default:
      return state;
  }
};
