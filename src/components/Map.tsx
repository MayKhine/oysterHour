import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import type { RestaurantType } from "./RestaurantCard"
import { MapMarker } from "./MapMarker"
import type { SelectionType } from "../App"

type MapPros = {
  dataArr: Array<RestaurantType>
  selection: RestaurantType | null
  setSelection: (restaurant: SelectionType) => void
}
export const Map = ({ dataArr, selection, setSelection }: MapPros) => {
  const BOSTON_COORDINATES: [number, number] = [42.3601, -71.0589]
  return (
    <div
      className=" 
        box-border w-full h-100 max-h-[calc(100vh-80px)] z-0 p-5
        md:w-110 md:h-220 md:left-0 md:fixed md:z-1 md:p-0 md:pt-15 md:pl-10
        xl:w-150 xl:left-auto xl:mr-150
      "
    >
      <div className="h-full rounded-xl overflow-hidden">
        <MapContainer
          center={BOSTON_COORDINATES}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="© OpenStreetMap, © CartoDB"
          />
          {dataArr.map((restaurantData, index) => {
            return (
              <MapMarker
                key={index}
                id={restaurantData.id}
                name={restaurantData.name}
                position={restaurantData.position}
                selection={selection}
                setSelection={setSelection}
              />
            )
          })}
        </MapContainer>
      </div>
    </div>
  )
}
