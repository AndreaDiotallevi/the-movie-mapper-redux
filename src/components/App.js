import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MapContainer from "./MapContainer";
import MovieList from "./MovieList";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <MapContainer />
        <Route to="/movies" component={MovieList} />
      </BrowserRouter>
    </div>
  );
};

export default App;
