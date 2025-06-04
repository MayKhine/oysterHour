import { forwardRef } from "react"
import type { SelectionType } from "../App"

export type RestaurantType = {
  id: string
  name: string
  position: { lat: number; lng: number }
  phone?: number
  address?: string
  link?: string
  googleMapLink?: string
  hours?: { day: string; startHr: number; endHr: number }[]
  notes?: string
}

type RestaurantCardProps = {
  data: RestaurantType
  setSelection: (restaurant: SelectionType) => void
  isSelected: boolean
}

export const RestaurantCard = forwardRef<HTMLDivElement, RestaurantCardProps>(
  ({ data, setSelection, isSelected }, ref?) => {
    const formatPhoneNum = (phone: number) => {
      const cleanedPhNum = ("" + phone).replace(/\D/g, "")

      if (cleanedPhNum.length === 10) {
        return (
          "(" +
          phone?.toString().slice(0, 3) +
          ") " +
          phone?.toString().slice(3, 6) +
          "-" +
          phone?.toString().slice(6)
        )
      }

      return phone
    }

    const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

    const formatHappyHr = (
      happyHrArr: Array<{ day: string; startHr: number; endHr: number }>
    ) => {
      console.log("happy hr arr : ", happyHrArr)
      const displayHappyHrArr: Array<string> = []
      let tempDay = happyHrArr[0].day
      let tempStartHr = happyHrArr[0].startHr
      let tempEndHr = happyHrArr[0].endHr
      let weekdaysOffsetIndex = weekdays.indexOf(
        happyHrArr[0].day.toLowerCase()
      )

      for (let i = 1; i < happyHrArr.length; i++) {
        if (
          happyHrArr[i].day.toLowerCase() !==
            weekdays[weekdaysOffsetIndex + i] ||
          happyHrArr[i].startHr !== tempStartHr ||
          happyHrArr[i].endHr !== tempEndHr
        ) {
          if (tempDay.toLowerCase() !== happyHrArr[i - 1].day.toLowerCase()) {
            tempDay +=
              " - " +
              happyHrArr[i - 1].day +
              " " +
              tempStartHr +
              " - " +
              tempEndHr
          } else {
            tempDay += " " + tempStartHr + " - " + tempEndHr
          }
          //reset
          displayHappyHrArr.push(tempDay)
          weekdaysOffsetIndex =
            weekdays.indexOf(happyHrArr[i].day.toLowerCase()) - i
          tempDay = happyHrArr[i].day
          tempStartHr = happyHrArr[i].startHr
          tempEndHr = happyHrArr[i].endHr
        }
      }
      if (
        tempDay !== happyHrArr[happyHrArr.length - 1].day ||
        tempStartHr !== happyHrArr[happyHrArr.length - 1].startHr ||
        tempEndHr !== happyHrArr[happyHrArr.length - 1].endHr
      ) {
        tempDay +=
          " - " +
          happyHrArr[happyHrArr.length - 1].day +
          " " +
          tempStartHr +
          " - " +
          tempEndHr
      } else {
        tempDay += " " + tempStartHr + " - " + tempEndHr
      }
      displayHappyHrArr.push(tempDay)

      return (
        <div>
          {displayHappyHrArr.map((e, index) => {
            return <div key={index}> {e} </div>
          })}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={`flex flex-col gap-4 ${
          isSelected ? "bg-blue-200" : "bg-gray-200"
        }`}
        onClick={() => {
          setSelection({
            id: data.id,
            name: data.name,
            position: data.position,
            scroll: false,
          })
        }}
      >
        <h1>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl cursor-pointer bg-amber-200 max-w-max"
          >
            {data.name}
          </a>
        </h1>
        <div>
          {data.hours?.map((day, index) => {
            return (
              <div key={index}>
                {day.day} {day.startHr} {day.endHr}
              </div>
            )
          })}
        </div>
        {data.hours && <div> {formatHappyHr(data.hours)}</div>}
        <div className="flex flex-col">
          <span>{data.phone && formatPhoneNum(data.phone)}</span>
          <span>{data.address}</span>
          <span>{data.notes}</span>
          <a
            href={data.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block max-w-max"
          >
            Google Map Link
          </a>
          {data.notes && <p className="font-bold text-sm">{data.notes}</p>}
        </div>
      </div>
    )
  }
)
