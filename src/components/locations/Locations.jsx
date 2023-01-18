import { MapContainer , TileLayer, Marker } from 'react-leaflet';

const Locations = () => {
    const location = [25.2048, 55.2708];
    return (
        <div className="locations">
            <MapContainer  center={location} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={location} />
            </MapContainer >
        </div>
    );
};
export default Locations;
 