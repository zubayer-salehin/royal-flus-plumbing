import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';


function Location() {

    const position = [51.5072, -0.1276]

    return (
        <div className='px-3 mb-24'>
            <h2 className='text-4xl text-gray-900 text-center pt-[96px] pb-[60px] font-bold'>Our Location</h2>
            <MapContainer style={{ width: "100%", height: "550px" }} center={position} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Orgafresh Fruits Warehouse <br /> Exactly Location
                    </Popup>
                    <Tooltip>Orgafresh Fruits Warehouse</Tooltip>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Location;