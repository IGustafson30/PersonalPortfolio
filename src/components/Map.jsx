import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{
        scale: 1100,
        center: [-98.5, 39.5],
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography={"/states-10m.json"}
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-94.5795, 39.0997]}
        dx={-60}
        dy={-30}
        curve={1.35}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Kansas City, MO"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
