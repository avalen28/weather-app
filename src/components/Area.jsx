import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Circle, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import mapIcon from "../data/map.png";

const UpdateMap = ({ center, zoom, zoomControl }) => {
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
    iconUrl: mapIcon,
    iconSize: [24, 35],
  });
  const position = [latitude, longitude];
  const handleZoom = (e) => setZoom(Number(e.target.value));
  return (
    <>
      <div className="flex justify-between items-center py-2">
        <h2 className="font-semibold text-lg">Area</h2>
        <p className="font-light text-xs">max 20 km</p>
      </div>
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
