import React from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";
import DefaultMarker from '../../img/redMarker.png'
import '../../css/style.css';

const Marker=(props)=>{
    if (props.map && props.latlng) {
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(${props.icon})`;
            new mapboxgl.Marker(el)
              .setLngLat(props.latlng)
              .addTo(props.map);
          }
    return <div className="marker" />
}

Marker.propTypes = {
    latlng : PropTypes.arrayOf(PropTypes.number,PropTypes.number),
    icon : PropTypes.string,
  };
  
Marker.defaultProps = {
    latlng: [0,0],
    icon:DefaultMarker
};

export default Marker;
