import { Header } from "./components/Header"
import { RestaurantList } from "./components/RestaurantList"
import { Map } from "./components/Map"

export const App = () => (
  <div className="bg-pink-200 w-full h-full min-h-screen p-10 ">
    <Header />
    <div className="flex gap-20 bg-pink-300">
      <Map />
      <RestaurantList />
    </div>
  </div>
)
