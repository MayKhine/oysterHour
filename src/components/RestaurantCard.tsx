import { forwardRef, useState } from "react"
import { isDollarOysterOpenNow } from "../helpers/filterHelpers"
import type { SelectionType } from "../App"
import { Tooltip } from "./Tooltip"
export type RestaurantType = {
  id: string
  name: string
  position: { lat: number; lng: number }
  phone?: string
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
    const formatPhoneNum = (phone: string) => {
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
    const formatHr = (hour: number) => {
      if (hour == 12) return "12 PM"
      if (hour > 12) {
        return hour - 12 + " PM"
      } else {
        return hour + " AM"
      }
      return hour
    }

    const formatOysterDaysAndHours = (
      oysterDays: Array<{ day: string; startHr: number; endHr: number }>
    ) => {
      const textArrToDisplay: Array<string> = []
      let tempDay = oysterDays[0].day
      let tempStartHr = oysterDays[0].startHr
      let tempEndHr = oysterDays[0].endHr
      let weekdaysOffsetIndex = weekdays.indexOf(
        oysterDays[0].day.toLowerCase()
      )

      for (let i = 1; i < oysterDays.length; i++) {
        if (
          oysterDays[i].day.toLowerCase() !==
            weekdays[weekdaysOffsetIndex + i] ||
          oysterDays[i].startHr !== tempStartHr ||
          oysterDays[i].endHr !== tempEndHr
        ) {
          if (tempDay.toLowerCase() !== oysterDays[i - 1].day.toLowerCase()) {
            tempDay +=
              " - " +
              oysterDays[i - 1].day +
              " " +
              formatHr(tempStartHr) +
              " - " +
              formatHr(tempEndHr)
          } else {
            tempDay += " " + formatHr(tempStartHr) + " - " + formatHr(tempEndHr)
          }
          //reset everything for a new entry to text array
          textArrToDisplay.push(tempDay)
          weekdaysOffsetIndex =
            weekdays.indexOf(oysterDays[i].day.toLowerCase()) - i
          tempDay = oysterDays[i].day
          tempStartHr = oysterDays[i].startHr
          tempEndHr = oysterDays[i].endHr
        }
      }

      if (
        tempDay !== oysterDays[oysterDays.length - 1].day ||
        tempStartHr !== oysterDays[oysterDays.length - 1].startHr ||
        tempEndHr !== oysterDays[oysterDays.length - 1].endHr
      ) {
        tempDay +=
          " - " +
          oysterDays[oysterDays.length - 1].day +
          " " +
          formatHr(tempStartHr) +
          " - " +
          formatHr(tempEndHr)
      } else {
        tempDay += " " + formatHr(tempStartHr) + " - " + formatHr(tempEndHr)
      }
      textArrToDisplay.push(tempDay)

      return (
        <div>
          {textArrToDisplay.map((e, index) => {
            return <div key={index}> {e} </div>
          })}
        </div>
      )
    }

    // const oysterStatus = isOpenNow()
    const oysterNow = isDollarOysterOpenNow(data)
    const [statusHover, setStatusHover] = useState(false)
    return (
      <div
        ref={ref}
        className={` flex flex-col gap-2 ${
          isSelected
            ? "border-white border-2 box-sizing"
            : "border-softteal border-2 box-sizing"
        }
        bg-softteal p-5 rounded-xl`}
        onClick={() => {
          setSelection({
            id: data.id,
            name: data.name,
            position: data.position,
            scroll: false,
          })
        }}
      >
        <div className="flex justify-between items-start bg-amber-500">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl cursor-pointer  max-w-max"
          >
            {data.name}
          </a>

          <div>
            <div
              className={`${
                oysterNow ? "bg-green-600" : "bg-gray-400"
              } rounded-full min-h-5 min-w-5 border-1 border-white`}
              onMouseEnter={() => {
                setStatusHover(true)
              }}
              onMouseLeave={() => {
                setStatusHover(false)
              }}
            ></div>
            {statusHover && (
              <Tooltip
                text={oysterNow === true ? "$ Oyster Now" : "Unavailable"}
                ml="-ml-20"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span>{data.phone && formatPhoneNum(data.phone)}</span>
            <a
              href={data.googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block max-w-max"
            >
              {data.address}
            </a>
          </div>
          <div>
            <div className="font-bold">Dollar Oyster Hours </div>
            {data.hours && (
              <div className="">{formatOysterDaysAndHours(data.hours)}</div>
            )}
          </div>
          {data.notes && <p className="font-bold text-sm">📌 {data.notes}</p>}
        </div>
      </div>
    )
  }
)
