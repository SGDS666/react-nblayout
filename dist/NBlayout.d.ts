import React, { ReactNode } from "react";
import "./nb.css";
export declare const Div: React.FC<{
    style?: React.CSSProperties;
    children?: ReactNode;
}>;
export declare const col: (arr: JSX.Element[], style?: React.CSSProperties, itemstyle?: React.CSSProperties) => JSX.Element;
export declare const row: (arr: JSX.Element[], style?: React.CSSProperties, itemstyle?: React.CSSProperties) => JSX.Element;
export declare const NBLayout: (NBarr: JSX.Element[], style?: React.CSSProperties, className?: string) => JSX.Element;
