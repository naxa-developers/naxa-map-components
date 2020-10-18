import React from 'react';
// import Badge from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import MarkerIcon from "../../img/logo192.png";
import MapboxComponent from './MapboxComponent.jsx';
import Marker from '../Marker/Marker';
import Choropleth from '../Choropleth/Choropleth';
import Legend from '../Legend/Legend';
import VectorTile from '../VectorTile/VectorTile'
storiesOf('Mapbox', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <MapboxComponent center={[84, 28]} zoom={6} width="1200px" height="600px">
    </MapboxComponent>
  ))
  .add('With Marker', () => (
    <MapboxComponent >
      <Marker latlng={[84, 28]} icon={MarkerIcon} />
    </MapboxComponent>
  ))
  .add('With Choropleth ', () => (
    <MapboxComponent >
      <Choropleth/>
    </MapboxComponent>
  ))
  .add('With Choropleth & Legend', () => (
    <MapboxComponent >
      <Choropleth
      // you can change the {municipality} to district or province to change tile
          tilesUrl="https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}"
          fillColor={[0, "#FED976", 100, "#FEB24C",200,"#FD8D3C",300, "#FC4E2A",400,"#E31A1C",500,"#BD0026"]}
          lineColor="#fff"
          __onHoverFill={(e) => {
            console.log(e);
          }}
          __onClickFill={(e) => {
            console.log(e);
          }}
          __DEBUG
        >
          <Legend />
        </Choropleth>
    </MapboxComponent>
  ))
  .add('With VectorTile', () => (
    <MapboxComponent>
      <VectorTile/>
    </MapboxComponent>
  ));
