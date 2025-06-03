import L from "leaflet"
import { useRef } from "react"
import { Marker, Popup } from "react-leaflet"

type MapMarkerProps = {
  position: { lat: number; lng: number }
  name: string
}
export const MapMarker = ({ position, name }: MapMarkerProps) => {
  const oysterIcon = L.icon({
    iconUrl: "/oyster.png",
    iconSize: [25, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -15],
    className: "leaflet-oyster-icon",
  })

  const markerRef = useRef<L.Marker>(null)

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
      eventHandlers={{ mouseover: handleMouseOver, mouseout: handleMouseOut }}
      ref={markerRef}
    >
      <Popup autoClose closeOnEscapeKey>
        {name}
      </Popup>
    </Marker>
  )
}
