import React, { CSSProperties } from "react"

import Navbar from "./Navbar"
import Content from "./Content"

export default function Layout() {
    return (
        <div style={bodyStyle}>
            <Navbar />
            <Content />
        </div>
    )
}

const bodyStyle: CSSProperties = {
    position:"relative",
    height: "100%",
    background: "#eca13a", // forest
    // background: "#4faca1", // sky
    // background: "#deeaf6", // sea
    color: "#333",
    
    overflow:"hidden"
}