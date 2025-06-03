export type restaurantCardProps = {
  name: string
  position: { lat: number; lng: number }
  address: string
  notes: string
  googleMapLink: string
}

export const RestaurantCard = ({
  name,
  address,
  notes,
  googleMapLink,
}: restaurantCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="flex flex-col ">
        <span>{address}</span>
        <span>{notes}</span>
        <a
          href={googleMapLink}
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
