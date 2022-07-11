import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import { useState, useEffect } from "react";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
// class MyMap extends Component {
//   state = {};

//   render() {
//     return <div>My Map</div>;
//   }
// }
//const colors = ["green", "blue", "oragne", "grey", "pink"];
// const onCountryClick = (event) => {
//   console.log("click");
// };

function MyMap() {
  const [color, setColor] = useState("#ffff00");
  //console.log(mapData);

  console.log("color", color);
  const colorChange = (e) => {
    setColor(e.target.value);
  };

  const changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: color,
    });
  };

  const onEachCountry = (country, layer) => {
    //console.log(country.properties.ADMIN);
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    layer.options.fillOpacity = Math.random();
    //const colorIndex = Math.floor(Math.random() * colors.length);
    //layer.options.fillColor = colors[colorIndex];
    layer.on({
      click: changeCountryColor,
      // mouseover: changeCountryColor,
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Map</h1>
      <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
        <GeoJSON
          style={{
            fillColor: "red",
            fillOpacity: 1,
            color: "black",
            weight: 2,
          }}
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
      <input type="color" value={color} onChange={colorChange} />
    </div>
  );
}

// const styles = {
//   countryStyle: css`
//     fillcolor: "red";
//   `,
// };
export default MyMap;
