import L from "leaflet"
import { Marker, Tooltip } from "react-leaflet"
import type { RestaurantType } from "./RestaurantCard"
import type { SelectionType } from "../App"
import { useState } from "react"

type MapMarkerProps = {
  id: string
  position: { lat: number; lng: number }
  name: string
  selection: RestaurantType | null
  setSelection: (restaurant: SelectionType) => void
}
export const MapMarker = ({
  id,
  position,
  name,
  setSelection,
}: MapMarkerProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const oysterIcon = L.icon({
    iconUrl: "oyster.png",
    iconSize: [25, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -15],
    className: "leaflet-oyster-icon",
  })

  const oysterHoverIcon = L.icon({
    iconUrl: "/oyster_green.png",
    iconSize: [25, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -15],
    className: "leaflet-oyster-icon-hover",
  })

  // const markerRef = useRef<L.Marker>(null)
  // useEffect(() => {
  //   if (selection?.name === name && markerRef.current) {
  //     markerRef.current.openPopup()
  //   } else {
  //     markerRef.current?.closePopup()
  //   }
  // }, [selection, name])

  // const handleMouseOver = () => {
  //   if (markerRef.current) {
  //     markerRef.current.openPopup()
  //   }
  // }
  // const handleMouseOut = () => {
  //   if (markerRef.current) {
  //     markerRef.current.closePopup()
  //   }
  // }

  const handleClick = () => {
    setSelection({ id, name, position, scroll: true })
  }

  return (
    <Marker
      position={position}
      icon={isHovered ? oysterHoverIcon : oysterIcon}
      eventHandlers={{
        click: handleClick,
        mouseover: () => setIsHovered(true),
        mouseout: () => setIsHovered(false),
      }}
    >
      <Tooltip
        direction="top"
        offset={[0, -33]}
        permanent={false}
        sticky={false}
      >
        {name}
      </Tooltip>
    </Marker>
  )
}
