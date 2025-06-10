import { Header } from "./components/Header"
import { RestaurantList } from "./components/RestaurantList"
import { Map } from "./components/Map"
import { useEffect, useState } from "react"
import restaurantData from "./data/restaurantData.json"
import { isDollarOysterOpenNow } from "./helpers/filterHelpers"
export type SelectionType = {
  id: string
  name: string
  position: { lat: number; lng: number }
  scroll: boolean
}

export const App = () => {
  const [selection, setSelection] = useState<SelectionType | null>(null)
  const [showDollarOysterNow, setShowDollarOysterNow] = useState(false)
  const [filteredData, setFilteredData] = useState(restaurantData)

  useEffect(() => {
    if (showDollarOysterNow === true) {
      setFilteredData(restaurantData.filter(isDollarOysterOpenNow))
    }
    if (showDollarOysterNow === false) {
      setFilteredData(restaurantData)
    }
  }, [showDollarOysterNow])

  return (
    <div className="w-full min-h-screen custom-gradient">
      <Header />
      <div
        className="flex flex-wrap gap-10 box-border pt-15
      md:flex-nowrap md:gap-0 
      xl:justify-center"
      >
        <Map
          dataArr={filteredData}
          selection={selection}
          setSelection={setSelection}
        />
        <RestaurantList
          dataArr={filteredData}
          selection={selection}
          setSelection={setSelection}
          setShowDollarOysterNow={setShowDollarOysterNow}
          showDollarOysterNow={showDollarOysterNow}
          // isRestaurantOysterNow={isOpenNow(restaurantData)}
        />
      </div>
    </div>
  )
}
