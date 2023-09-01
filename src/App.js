import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Demo from "./containers/demo";
import ChargingStations from "./containers/Chargingstations";

export default function APP () {
  return (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" Component={Demo} />
        <Route path="/map" Component={ChargingStations} />
      </Routes>
    </Router>
  </Provider>
  )
}