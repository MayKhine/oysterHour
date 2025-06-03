import type { restaurantCardProps } from "../App"

type RestaurantListProps = {
  data: Array<restaurantCardProps>
}

export const RestaurantList = ({ data }: RestaurantListProps) => {
  console.log("data: ", data)

  return (
    <div
      className="
          opacity-80 w-full 
          md:ml-120 md:mt-20 md:p-10  md:min-h-max md:bg-green-500
          lg:ml-120 lg:mt-20  lg:min-h-max 
          xl:ml-150 xl:w-150 
        "
    >
      {data.map((restaurantData) => {
        return <div> {restaurantData.name} </div>
      })}
    </div>
  )
}
