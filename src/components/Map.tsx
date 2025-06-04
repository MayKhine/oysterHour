import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import type { restaurantType } from "./RestaurantCard"
import { MapMarker } from "./MapMarker"

type MapPros = {
  dataArr: Array<restaurantType>
  selection: restaurantType | null
  setSelection: (restaurant: restaurantType) => void
}
export const Map = ({ dataArr, selection, setSelection }: MapPros) => {
  const BOSTON_COORDINATES: [number, number] = [42.3601, -71.0589]
  return (
    <div
      className="
        box-border w-full h-100 border-4 mt-20
        md:w-120 md:h-200 md:left-0 md:fixed md:z-10 md:p-0
        xl:w-150 xl:left-auto xl:mr-150
      "
      style={{ maxHeight: "calc(100vh - 80px)" }}
    >
      <MapContainer
        center={BOSTON_COORDINATES}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {dataArr.map((restaurantData, index) => {
          return (
            <MapMarker
              key={index}
              name={restaurantData.name}
              position={restaurantData.position}
              selection={selection}
              setSelection={setSelection}
            />
          )
        })}
      </MapContainer>
    </div>
  )
}
