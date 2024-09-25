import { ReactNode } from "react"

interface PanelProps {
    children?: ReactNode
    defaultPadding?: boolean
    classNames?: string
}
function Panel({ children, classNames, defaultPadding = true }:PanelProps){
    return (
        <div className={`${defaultPadding && 'p-3'} border border-lime-900 bg-neutral-800 rounded-lg ${classNames}`}>
            {children}
        </div>
    )
}
export default Panel