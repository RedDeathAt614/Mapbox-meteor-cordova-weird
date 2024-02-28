import React from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const map = new mapboxgl.Map({
  container: 'hejsaid', // container ID
});

export const App = () => (
  <div>
    <h1>Hello world</h1>
    <div className="hejsa" id="hejsaid"></div>
  </div>
);
