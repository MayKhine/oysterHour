import L from "leaflet"
import { useEffect, useRef } from "react"
import { Marker, Popup } from "react-leaflet"
import type { restaurantType } from "./RestaurantCard"

type MapMarkerProps = {
  position: { lat: number; lng: number }
  name: string
  selection: restaurantType | null
}
export const MapMarker = ({ position, name, selection }: MapMarkerProps) => {
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

  return (
    <Marker
      position={position}
      icon={oysterIcon}
      eventHandlers={{
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
      }}
      ref={markerRef}
    >
      <Popup autoClose closeOnEscapeKey>
        {name}
      </Popup>
    </Marker>
  )
}
