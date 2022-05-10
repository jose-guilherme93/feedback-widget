import { CircleNotch } from "phosphor-react";


export function Loading() {
    return (
        <section>
            <CircleNotch weight="bold" className="h-6 w-6 animate-spin" />
        </section>
    )
}