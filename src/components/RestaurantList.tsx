import { useEffect, useRef } from "react"
import { RestaurantCard, type restaurantType } from "./RestaurantCard"

type RestaurantListProps = {
  dataArr: Array<restaurantType>
  selection: restaurantType | null
  setSelection: (restaurant: restaurantType) => void
}

export const RestaurantList = ({
  dataArr,
  selection,
  setSelection,
}: RestaurantListProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (selection) {
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
          md:ml-120 md:mt-20 md:p-10 md:pt-0 md:min-h-max
          lg:ml-120 lg:mt-20  lg:min-h-max 
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
