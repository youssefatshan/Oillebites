import React from "react";
// Import React Leaflet components:
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Locations.css'

const position = [25.222681, 55.281985]

const Locations = () => {
    return (
        <div className="Locations" id="locations">
          <h1 className="text-center">This is Our Locations</h1>
          <div className="locations-text">
          Welcome to the OilleBites locations page, where you'll find information on all of our fast food chain locations in the vibrant city of Dubai. As one of the top tourist and business destinations in the Middle East, Dubai offers a unique blend of traditional Arabic culture and futuristic skyscrapers, making it the perfect place to indulge in your favorite fast food.
At OilleBites, we have a wide variety of locations throughout Dubai to choose from, all of which offer delicious fast food options and friendly service. Whether you're looking for a quick bite on the go or a sit-down meal, we have a location that will suit your needs.

          </div>
          <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                OllieBites <br /> Dubai.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
    );
};
export default Locations;
