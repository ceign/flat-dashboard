import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AboutMap.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let iconUbication = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [22, 36],
  iconAnchor: [12, 62],
  shadowAnchor: [24, 62],
  popupAnchor: [0, -70],
});

const AboutMap = () => {
  const position = [-33.442, -70.65];
  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      className="about__location-card__map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={iconUbication}>
        <Popup>
          El mejor país de Chile <br /> hmno
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default AboutMap;
