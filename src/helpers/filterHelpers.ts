import type { RestaurantType } from "../components/RestaurantCard"

export const isDollarOysterOpenNow = (data: RestaurantType) => {
  const now = new Date()
  const today = now.toLocaleDateString("en-US", { weekday: "short" })
  const curHour = now.getHours()
  const oysterDays = data.hours || []
  for (let i = 0; i < oysterDays?.length; i++) {
    if (
      today.toLowerCase() === oysterDays[i].day.toLowerCase() &&
      curHour >= oysterDays[i].startHr &&
      curHour < oysterDays[i].endHr
    ) {
      return true
    }
  }
  return false
}
