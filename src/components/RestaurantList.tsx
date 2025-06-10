import { useEffect, useRef } from "react"
import { RestaurantCard, type RestaurantType } from "./RestaurantCard"
import type { SelectionType } from "../App"
import oysterIcon from "../../public/oyster.png"
type RestaurantListProps = {
  dataArr: Array<RestaurantType>
  selection: SelectionType | null
  setSelection: (restaurant: SelectionType) => void
  setShowDollarOysterNow: (value: boolean) => void
  showDollarOysterNow: boolean
}

export const RestaurantList = ({
  dataArr,
  selection,
  setSelection,
  setShowDollarOysterNow,
  showDollarOysterNow,
}: RestaurantListProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (selection?.scroll && window.innerWidth >= 768) {
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
          w-full p-5 pt-0 flex flex-col 
          md:ml-110 md:p-10 md:pt-0 md:min-h-max
          lg:ml-110 lg:min-h-max 
          xl:ml-150 xl:w-150 
        "
    >
      <div className="flex justify-end">
        <div className="h-15 flex items-center gap-2">
          <p className="font-bold">$1 Oyster Now</p>

          <div
            className={` transition-property duration-300 ease-in-out ${
              showDollarOysterNow ? "bg-green-600" : "bg-gray-500 "
            } w-15 rounded-3xl h-6 flex justify-self-center cursor-pointer`}
            onClick={() => {
              setShowDollarOysterNow(!showDollarOysterNow)
            }}
          >
            <div
              className={`w-7 transform transition-transform duration-300 ease-in-out flex items-center justify-center  ${
                showDollarOysterNow ? "translate-x-7" : "translate-x-1"
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
