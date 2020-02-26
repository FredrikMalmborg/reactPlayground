import React, { CSSProperties } from "react"

import Navbar from "./Navbar"
import ViewContainer from "./ViewContainer"

export default class Layout extends React.Component {

    render() {
        return (
            <div style={bodyStyle}>
                <Navbar />
                <ViewContainer />
            </div>
        )
    }
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