import React, { ReactNode } from "react"
import "./nb.css";

export const Div: React.FC<{ style?: React.CSSProperties, children?: ReactNode }> = ({ style, children }) => {
    return <div
        className="nb-div"
        style={style}>{children ?? "div"}</div>
}

export const col = (arr: JSX.Element[], style?: React.CSSProperties, itemstyle?: React.CSSProperties) => {
    return columnHandle(arr, style, itemstyle)
}
export const row = (arr: JSX.Element[], style?: React.CSSProperties, itemstyle?: React.CSSProperties) => {
    return rowHandle(arr, style, itemstyle)
}




const rowHandle = (row: JSX.Element[], style?: React.CSSProperties, itemstyle?: React.CSSProperties) => {
    return (
        <div
            className="nb-row"
            style={style}
            >
            {
                row.map((r, i) => React.cloneElement(r, itemstyle ? { key: i, style: itemstyle  } : { key: i }))
            }
        </div>
    )
}

const columnHandle = (column: JSX.Element[], style?: React.CSSProperties, itemstyle?: React.CSSProperties) => {
    return (
        <div
            className="nb-col"
            style={ style }
            >
            {
                column.map((r, i) => React.cloneElement(r, itemstyle ? { key: i, style:itemstyle } : { key: i }))
            }
        </div>
    )
}
export const NBLayout = (NBarr: JSX.Element[], style?: React.CSSProperties) => {

    return (
        <div className="nb-root" 
        style={style}
        >
            {NBarr.map((ele, i) => React.cloneElement(ele, { key: i }))}
        </div>
    )
}