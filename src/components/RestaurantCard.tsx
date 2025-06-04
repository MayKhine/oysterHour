export type restaurantType = {
  name: string
  position: { lat: number; lng: number }
  address?: string
  notes?: string
  googleMapLink?: string
}

type restaurantCardProps = {
  data: restaurantType
  setSelection: (restaurant: restaurantType) => void
}

export const RestaurantCard = ({ data, setSelection }: restaurantCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-xl cursor-pointer">{data.name}</h3>
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => {
          setSelection({ name: data.name, position: data.position })
        }}
      >
        <span>{data.address}</span>
        <span>{data.notes}</span>
        <a
          href={data.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          Google Map Link
        </a>
      </div>
    </div>
  )
}
