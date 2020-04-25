export default [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 100,
      },
      {
        color: "#000000",
      },
      {
        lightness: 100,
      },
      {
        visibility: "on",
      },
      {
        "font-family": "Work Sans",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#FFFFFF",
      },
      {
        lightness: 100,
      },
      {
        weight: 0.35,
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#4d6059",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#38444C",
      },
      {
        visibility: "on",
      },
    ],
  },
];
