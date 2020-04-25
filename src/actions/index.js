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
