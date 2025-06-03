import { RestaurantCard, type restaurantCardProps } from "./RestaurantCard"

type RestaurantListProps = {
  dataArr: Array<restaurantCardProps>
}

export const RestaurantList = ({ dataArr }: RestaurantListProps) => {
  return (
    <div
      className="
          opacity-80 w-full p-5 flex flex-col gap-5
          md:ml-120 md:mt-20 md:p-10  md:min-h-max
          lg:ml-120 lg:mt-20  lg:min-h-max 
          xl:ml-150 xl:w-150 
        "
    >
      {dataArr.map((restaurantData, index) => {
        return <RestaurantCard key={index} {...restaurantData} />
      })}
    </div>
  )
}
