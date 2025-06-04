import { forwardRef } from "react"
import type { SelectionType } from "../App"

export type RestaurantType = {
  id: string
  name: string
  position: { lat: number; lng: number }
  phone?: number
  address?: string
  link?: string
  googleMapLink?: string
  hours?: { day: string; startHr: number; endHr: number }[]
  notes?: string
}

type RestaurantCardProps = {
  data: RestaurantType
  setSelection: (restaurant: SelectionType) => void
  isSelected: boolean
}

export const RestaurantCard = forwardRef<HTMLDivElement, RestaurantCardProps>(
  ({ data, setSelection, isSelected }, ref?) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-4 ${
          isSelected ? "bg-blue-200" : "bg-gray-200"
        }`}
      >
        <h3 className="font-bold text-xl cursor-pointer bg-amber-200 max-w-max">
          {data.name}
        </h3>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => {
            setSelection({
              id: data.id,
              name: data.name,
              position: data.position,
              scroll: false,
            })
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
)
