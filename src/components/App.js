import React from "react";
import { Router, Route } from "react-router-dom";

import MapContainer from "./MapContainer";
import MovieList from "./MovieList";
import history from "../history";

const App = (props) => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={MapContainer} />
        <Route path="/:country" component={MovieList} />
      </Router>
    </div>
  );
};

export default App;
