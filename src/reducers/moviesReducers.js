export default (state = [], action) => {
  switch (action.type) {
    case "MOVIE_FETCHED":
      return [...state, action.payload];
    case "MOVIES_CLEARED":
      return [];
    default:
      return state;
  }
};
