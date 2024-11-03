import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"


interface gridProps {
    children: ReactNode
    className?: string
}

const GridContainer = ({children, className}: gridProps) => {
    const defaultClass = "w-full max-w-[60.25rem] mx-auto px-3 flex justify-between items-center"
    return(
        <div className={twMerge(defaultClass, className)}>
            {children}
        </div>
    )
}

export default GridContainer