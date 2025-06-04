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
        mt-20 w-full h-150 
        md:w-120 md:h-200 md:max-h-full md:left-0  md:fixed md:z-10 md:top-20 md:mt-0 md:p-0
        lg:w-120 lg:left-0  lg:fixed lg:z-10 lg:top-20 lg:mt-0 lg:p-0
        xl:w-150 xl:left-auto xl:mr-150
      "
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
