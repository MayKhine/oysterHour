import L from "leaflet"
import { useEffect, useRef } from "react"
import { Marker, Popup } from "react-leaflet"
import type { RestaurantType } from "./RestaurantCard"
import type { SelectionType } from "../App"

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
  selection,
  setSelection,
}: MapMarkerProps) => {
  const oysterIcon = L.icon({
    iconUrl: "/oyster.png",
    iconSize: [25, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -15],
    className: "leaflet-oyster-icon",
  })

  const markerRef = useRef<L.Marker>(null)

  useEffect(() => {
    if (selection?.name === name && markerRef.current) {
      markerRef.current.openPopup()
    } else {
      markerRef.current?.closePopup()
    }
  }, [selection, name])

  const handleMouseOver = () => {
    if (markerRef.current) {
      markerRef.current.openPopup()
    }
  }
  const handleMouseOut = () => {
    if (markerRef.current) {
      markerRef.current.closePopup()
    }
  }

  const handleClick = () => {
    setSelection({ id, name, position, scroll: true })
  }
  return (
    <Marker
      position={position}
      icon={oysterIcon}
      eventHandlers={{
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        click: handleClick,
      }}
      ref={markerRef}
    >
      <Popup autoClose closeOnEscapeKey>
        {name}
      </Popup>
    </Marker>
  )
}
