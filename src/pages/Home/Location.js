import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "./Location.css";

function Location() {

    return (
        <div className='mb-20'>
            <h2 className='text-4xl text-gray-900 text-center mb-12 font-bold'>Our Location</h2>
            <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Location;