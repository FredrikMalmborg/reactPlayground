import React, { CSSProperties } from "react"

import MainView from "./MainView"


export default class Layout extends React.Component {

    render() {
        return (
            <div style={viewStyle}>
                <MainView />
            </div>
        )
    }
}

const viewStyle: CSSProperties = {
    height: "100%",
}