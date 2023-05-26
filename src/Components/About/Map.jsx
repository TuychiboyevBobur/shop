import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components"

import "leaflet/dist/leaflet.css"

const MapContent = styled(MapContainer)`
  height: 28rem;
  width: 45%;
`

const Map = () => {
  const position = [41.27102, 69.2326]
  return (
    <MapContent center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Impactt coddy camp</Popup>
      </Marker>
    </MapContent>
  )
}

export default Map
