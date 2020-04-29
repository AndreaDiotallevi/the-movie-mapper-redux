export default (state = "", action) => {
  switch (action.type) {
    case "COUNTRY_FETCHED":
      return action.payload;
    case "COUNTRY_CLEARED":
      return "";
    default:
      return state;
  }
};
