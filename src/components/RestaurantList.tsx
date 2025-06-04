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
  return (
    <div
      className="
          opacity-80 w-full p-5 flex flex-col gap-5
          md:ml-120 md:mt-20 md:p-10  md:min-h-max
          lg:ml-120 lg:mt-20  lg:min-h-max 
          xl:ml-150 xl:w-150 
        "
    >
      {selection && <div> Current Selection: {selection?.name}</div>}{" "}
      {dataArr.map((restaurantData, index) => {
        return (
          <RestaurantCard
            key={index}
            data={restaurantData}
            setSelection={setSelection}
          />
        )
      })}
    </div>
  )
}
