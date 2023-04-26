"use client"

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {

    const position: [number, number] = [19.238507286749293, -98.9105136133237];

    return (
        <MapContainer className='w-full h-80' center={[19.238507286749293, -98.9105136133237]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    63QQ+MX, Manzana 023, San Mateo Huitzilzingo, 56625 Mixquic, Méx.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
