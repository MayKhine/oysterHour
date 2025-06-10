type TooltipProps = {
  text: string
  ml?: string
}
export const Tooltip = ({ text, ml }: TooltipProps) => {
  return (
    // <div className="absolute bg-softpeach shadow-lg shadow-purplesky  z-10 -mt-18 -ml-20 p-2 w-30 rounded text-center">
    <div
      className={`absolute bg-softpeach shadow-lg shadow-purplesky z-10 -mt-18 ${ml}
      p-2 w-30 rounded text-center`}
    >
      {text}
      <div
        className={`absolute top-full ml-19
                  -mt-[0px] w-0 h-0 z-100
                  border-l-8 border-l-transparent
                  border-r-8 border-r-transparent
                  border-t-8 border-t-softpeach`}
      />
    </div>
  )
}
