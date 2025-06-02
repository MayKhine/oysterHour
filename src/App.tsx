import { Header } from "./components/Header"
import { RestaurantList } from "./components/RestaurantList"
import { Map } from "./components/Map"

export const App = () => (
  <div className="bg-pink-200 w-full  min-h-screen">
    <Header />
    <div className="h-screen flex flex-wrap md:flex-nowrap gap-10 justify-center p-5">
      <Map />
      <RestaurantList />
    </div>
  </div>
)
