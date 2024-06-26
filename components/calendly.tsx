import { Separator } from "./separator"
import { InlineWidget } from "react-calendly"

export const Calendly = () => {
    return (
        <div className="text-center" id="calendly">
            <h1 className="pb-4 font-bold tracking-tight text-4xl lg:text-5xl">
                ready for your first appointment? <br /> Book your appointment
                today!
            </h1>
            <div className="flex items-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <InlineWidget
                url="https://calendly.com/j-lazaro0101/vixen-beauty-bar"
                styles={{ height: "1000px", borderRadius: "5px" }}
            />
        </div>
    )
}
