import React from "react";

const Choropleth = ({
  children,
  __DEBUG,
  map,
  tilesUrl,
  sourceLayer,
  fillColor,
  fillOpacity,
  lineColor,
  lineOpacity,
  __onHoverFill,
  __onClickFill,
}) => {
  const fillColorFilter = ["interpolate", ["linear"], ["get", "id"]];
  fillColor.forEach((color) => {
    fillColorFilter.push(color);
  });
  map &&
    map.on("load", function () {
      map.addSource("vector-tile-source", {
        type: "vector",
        tiles: [tilesUrl],
        //   url: "mapbox://mapbox.660ui7x6",
        promoteId: { default: "code" },
      });
      map.addLayer({
        id: "vector-tile-fillLayer",
        source: "vector-tile-source",
        "source-layer": sourceLayer,
        type: "fill",
        // filter: ["==", "isCounty", true],
        paint: {
          "fill-color": fillColorFilter,
          "fill-opacity": fillOpacity,
        },
      });
      map.addLayer({
        id: "vector-tile-outline",
        type: "line",
        source: "vector-tile-source",
        "source-layer": sourceLayer,
        paint: {
          "line-color": lineColor,
          "line-width": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            2,
            1,
          ],
        },
      });
      if (map.getLayer("vector-tile-fillLayer")) {
        map.on("mousemove", "vector-tile-fillLayer", function (e) {
            __DEBUG && console.log('%cOn Hover =======>', 'color: #00e600',e.features[0]);
            __onHoverFill(e);
        });
        map.on("click", "vector-tile-fillLayer", function (e) {
            __DEBUG && console.log('%cOn Click =======>', 'color: #aa00ff',e.features[0]);
            __onClickFill(e);
        });
      }
    });
  return <>
  {children ?React.Children.count(children) > 0 ?
      React.Children.map(children, (comp,key)=> React.cloneElement(comp,{fillColor,key}))
    : React.cloneElement(children,{fillColor,key:1}): <></>}
    </>;
};

Choropleth.defaultProps = {
  tilesUrl:
    "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
  sourceLayer: "default",
  fillColor: [0, "#F2F12D", 2, "#000"],
  fillOpacity: 0.7,
  lineColor: "rgba(0,0,0, 0.6)",
  //   lineOpacity:
};
export default Choropleth;
