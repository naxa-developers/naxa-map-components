import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";
import 'mapbox-gl/dist/mapbox-gl.css'

function MapboxComponent({ center, zoom, width, height, children }) {
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidmFydW4yNjYiLCJhIjoiY2pscTZ0OXUzMGh6NDNxcGw2aXptMnIxbiJ9.70WZ0gXX9tgXsnnRYNZI5Q";
    setMap(
      new mapboxgl.Map({
        container: "mapbox_map",
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: center, // starting position [lng, lat]
        zoom: zoom, // starting zoom
      })
    );
    return () => {
      setMap(null);
    };
  }, [center, zoom]);

  return (
    <div id="mapbox_map" style={{ width: width, height: height }}>
      {children ? React.Children.count(children) > 0 ?
      React.Children.map(children, (comp,key)=> React.cloneElement(comp,{map,key}))
    : React.cloneElement(children,{map,key:1}):<></>
    }
      {/* {children.map((comp,key)=> React.cloneElement(comp,{map,key}))} */}
    </div>
  );
}
MapboxComponent.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number, PropTypes.number),
  zoom: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

MapboxComponent.defaultProps = {
  center: [84, 28],
  zoom: 6,
  width: "1200px",
  height: "600px",
};

export default MapboxComponent;
