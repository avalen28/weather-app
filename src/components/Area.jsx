import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import { Icon } from "leaflet";

const Area = ({ coordinates: { latitude, longitude } }) => {
  const icon = new Icon({
    iconUrl:
      "https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png",
    iconSize: [38, 38],
  });
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}></Marker>
      <Circle center={position} radius={1000} />
    </MapContainer>
  );
};

export default Area;
