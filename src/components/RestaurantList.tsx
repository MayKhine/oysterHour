import { useEffect, useRef, useState } from "react"
import { RestaurantCard, type RestaurantType } from "./RestaurantCard"
import type { SelectionType } from "../App"
import oysterIcon from "../../public/oyster.png"
type RestaurantListProps = {
  dataArr: Array<RestaurantType>
  selection: SelectionType | null
  setSelection: (restaurant: SelectionType) => void
}

export const RestaurantList = ({
  dataArr,
  selection,
  setSelection,
}: RestaurantListProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (selection?.scroll) {
      const cardIndex = dataArr.findIndex((res) => res.name === selection.name)
      const card = cardRefs.current[cardIndex]
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }, [selection, dataArr])

  return (
    <div
      className="box-border 
          opacity-80 w-full p-5 pt-0 flex flex-col gap-5
          md:ml-120 md:p-10 md:pt-0 md:min-h-max
          lg:ml-120 lg:min-h-max 
          xl:ml-150 xl:w-150 
        "
    >
      <div className="flex justify-end">
        <div className="h-15 flex items-center gap-2">
          <p className="font-bold">$1 Oyster Now</p>

          <div
            className={` ${
              open ? "bg-green-600" : "bg-gray-500 "
            } w-17 rounded-3xl h-6 flex justify-self-center cursor-pointer`}
            onClick={() => {
              setOpen(!open)
            }}
          >
            <div
              className={`w-7 transform transition-transform duration-200 flex items-center justify-center ${
                open ? "translate-x-9" : "translate-x-1"
              }`}
            >
              <img src={oysterIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {dataArr.map((restaurantData, index) => {
          return (
            <RestaurantCard
              key={index}
              data={restaurantData}
              setSelection={setSelection}
              isSelected={selection?.name == restaurantData.name ? true : false}
              ref={(element) => {
                if (cardRefs) {
                  cardRefs.current[index] = element
                }
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
