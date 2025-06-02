import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
export const Map = () => {
  const BOSTON_COORDINATES: [number, number] = [42.3601, -71.0589]

  return (
    <div className="bg-green-500 w-full min-w-100 min-h-100 md:w-200 md:h-4/5">
      <MapContainer
        center={BOSTON_COORDINATES}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  )
}
