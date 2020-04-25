export default (state = [], action) => {
  switch (action.type) {
    case "COORDINATES_CLICKED":
      return action.payload;
    default:
      return state;
  }
};
