import React from "react";

const VectorTile = ({ map, tileUrl,sourceLayer, lineColor,lineWidth }) => {
  //   console.log(map, "choro");
  map &&
    map.on("load", function () {
      map.addSource("vector-tile-x", {
        type: "vector",
        tiles: [tileUrl],
      });
      map.addLayer({
        id: "vector-tile-l",
        type: "line",
        source: "vector-tile-x",
        "source-layer": sourceLayer,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": lineColor,
          "line-width": lineWidth,
        },
      });
    });
  return <></>;
};
VectorTile.defaultProps = {
  tileUrl:
      "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
    sourceLayer: "default",
    lineColor: "rgba(0,0,0, 0.6)",
    lineWidth: 1
  };
export default VectorTile;
