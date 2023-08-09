import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Circle, useMap } from "react-leaflet";
import { Icon } from "leaflet";

const UpdateMap = ({center, zoom, zoomControl}) => {
  // Except for its children, MapContainer props are immutable: changing them after they have been set a first
  // time will have no effect on the Map instance or its container.The Leaflet Map instance created by the MapContainer 
  // element can be accessed by child components using one of the provided hooks or the MapConsumer component.
  const map = useMap();
  map.setView(center, zoom, zoomControl);
  return null;
};

const Area = ({ coordinates: { latitude, longitude } }) => {
  const [zoom, setZoom] = useState(13);
  const icon = new Icon({
    iconUrl:
      "https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png",
    iconSize: [38, 38],
  });
  const position = [latitude, longitude];
  const handleZoom = (e) => setZoom(Number(e.target.value));
  return (
    <>
      <input
        type="range"
        name="zoom"
        min="1"
        max="18"
        value={zoom}
        onChange={handleZoom}
      />
      <MapContainer center={position} zoom={zoom} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}></Marker>
        <Circle center={position} radius={1000} />
        <UpdateMap center={position} zoom={zoom} zoomControl={false} />
      </MapContainer>
    </>
  );
};

export default Area;
