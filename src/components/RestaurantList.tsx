import { useEffect, useRef } from "react"
import { RestaurantCard, type RestaurantType } from "./RestaurantCard"
import type { SelectionType } from "../App"

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
          md:ml-120  md:p-10 md:pt-0 md:min-h-max
          lg:ml-120  lg:min-h-max 
          xl:ml-150 xl:w-150 
        "
    >
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
  )
}
