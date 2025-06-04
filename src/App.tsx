import { Header } from "./components/Header"
import { RestaurantList } from "./components/RestaurantList"
import { Map } from "./components/Map"
import { useState } from "react"
import type { restaurantType } from "./components/RestaurantCard"

export const App = () => {
  const restaurantData: Array<restaurantType> = [
    {
      name: "Thirsty Scholar Pub",
      position: { lat: 42.376311, lng: -71.104222 },
      address: "70 Beacon St, Somerville, MA 02143, USA",
      notes:
        "This laid-back bar offers $1 oysters every Tuesday. The deal starts at 4 p.m. and goes until they run out.",
      googleMapLink:
        "https://www.google.com/maps/place/Thirsty+Scholar+Pub/@42.376311,-71.104222,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3774970eb475d:0xf295081f4049d37!8m2!3d42.376311!4d-71.104222!16s%2Fg%2F1tgb8c4b?entry=ttu",
    },
    {
      name: "Sal + Stone",
      position: { lat: 42.3940718, lng: -71.0789321 },
      address: "463 Assembly Row, Somerville, MA 02145",
      notes:
        "Salt + Stone in Somerville’s Assembly Row offers $1 oysters at the bar from Monday through Friday, 3 to 5 p.m.",
      googleMapLink:
        "https://www.google.com/maps/place/Salt+%2B+Stone/@42.3940639,-71.0789321,17z/data=!4m6!3m5!1s0x89e371b5ddd86f07:0x59aa656f53e6cfc9!8m2!3d42.3940718!4d-71.0789321!16s%2Fg%2F11rnb3ddt_?entry=ttu",
    },

    {
      name: "Warren Tavern",

      position: { lat: 42.3741694, lng: -71.0631664 },
      address: "2 Pleasant St, Boston, MA",
      notes:
        "Find $1 oysters at historic Charlestown spot Warren Tavern — which has counted George Washington and Paul Revere among its patrons — every weekday from 3 to 6 p.m.",
      googleMapLink:
        "https://www.google.com/maps/place/Warren+Tavern/@42.3741694,-71.0631664,17z/data=!3m1!4b1!4m6!3m5!1s0x89e370ed7348f66f:0x884dacf410968c9e!8m2!3d42.3741694!4d-71.0631664!16s%2Fm%2F03gy0j4?entry=ttu",
    },
    {
      name: "Viale",
      position: { lat: 42.3640063, lng: -71.1018061 },
      address: "502 Massachusetts Ave, Cambridge, MA",
      notes:
        "Central Square restaurant Viale is shucking $1 oysters daily from 5 to 7 p.m.",
      googleMapLink:
        "https://www.google.com/maps/place/Viale/@42.3640063,-71.1017954,17z/data=!4m6!3m5!1s0x89e377540cfccdd9:0x9a03f44bae811e0e!8m2!3d42.3640063!4d-71.1018061!16s%2Fg%2F11b6cj0yrx?entry=ttu",
    },
    {
      name: "State Street Provisions",
      position: { lat: 42.3593857, lng: -71.0513553 },
      address: "255 State St, Boston, MA 02109",
      notes:
        "Located along Boston’s landmark Long Wharf, State Street Provisions shucks oysters for $1 apiece every weeknight from 3 to 5 p.m.",
      googleMapLink:
        "https://www.google.com/maps/place/255+State+St,+Boston,+MA+02109/@42.3593857,-71.0513553,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37087bfe70e9b:0xc41483eb6943b849!8m2!3d42.3593857!4d-71.0513553!16s%2Fg%2F11b8v49435?entry=ttu",
    },
    {
      name: "Carrie Nation Cocktail Club",
      position: { lat: 42.3583663, lng: -71.0616334 },
      address: "11 Beacon St, Boston, MA 02108",
      notes:
        "Swanky Beacon Hill spot Carrie Nation offers $1 oysters Tuesday through Thursday, 4 to 7 p.m.",
      googleMapLink:
        "https://www.google.com/maps/place/Carrie+Nation+Cocktail+Club/@42.3583663,-71.0616334,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37084b32c045f:0x19d822dd35782b1e!8m2!3d42.3583663!4d-71.0616334!16s%2Fg%2F12jm40qs5?entry=ttu",
    },
  ]
  const [selection, setSelection] = useState<restaurantType | null>(null)
  return (
    <div className="bg-pink-200 w-full min-h-screen">
      <Header />
      {/* <div className="h-screen flex flex-wrap md:flex-nowrap gap-10 justify-center p-5"> */}
      <div className="flex md:flex-nowrap flex-wrap xl:justify-center ">
        <Map dataArr={restaurantData} selection={selection} />
        <RestaurantList
          dataArr={restaurantData}
          selection={selection}
          setSelection={setSelection}
        />
      </div>
    </div>
  )
}
