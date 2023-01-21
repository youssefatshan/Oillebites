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
 
// //how to import google map in react?
// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const GOOGLE_MAPS_JS_API_KEY='AIzaSyB6whuBhj_notrealkey';


// class GoogleMap extends React.Component {
// constructor() {

//     this.state = {
//         zoom: 13
//     }

//     this.onMapClicked = this.onMapClicked.bind(this);
//     this.handleMapMount = this.handleMapMount.bind(this);
// }

// onMapClicked (props) {
//     if (this.state.showingInfoWindow) {
//         this.setState({
//             showingInfoWindow: false,
//             activeMarker: null
//         })
//     }
// }

// handleMapMount(mapProps, map) {
//     this.map = map;

//     //log map bounds
//     console.log(this.map.getBounds());
// }

// render() {
//     const {google} = this.props;

//     if (!this.props.loaded) {
//         return <div>Loading...</div>
//     }

//     return (
//         <Map className='google-map'
//             google={google}
//             onClick={this.onMapClicked}
//             zoom={this.state.zoom}
//             onReady={this.handleMapMount}
//             >
//         </Map>
//         );
//     }
// }

// export default GoogleApiWrapper({
// apiKey: (GOOGLE_MAPS_JS_API_KEY)
// })(GoogleMap);




// //Source: https://stackoverflow.com/questions/46152806


