import React, { useState } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect,useRef } from 'react';

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxiaWFuIiwiYSI6ImNrdjgzOWZtczFmcG8yb3BnYTF3dG9rMjkifQ.zAw5Hcg-L_7eGHPK4zu0hQ";

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    console.log("hejsaid")
    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v12',
    });
  })

  return (
    <div ref={mapContainer} className="map-container" />
  );
};
