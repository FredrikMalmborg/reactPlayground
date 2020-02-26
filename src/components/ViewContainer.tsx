import React, { CSSProperties } from "react"

import MainView from "./MainView"
import DetailView from "./DetailView"

interface Props {
    view: string
}

export default class ViewContainer extends React.Component<Props> {

    

    render() {
        return (
            <div style={viewStyle}>
                <MainView />
                <DetailView />
            </div>
        )
    }
}

const viewStyle: CSSProperties = {
    height: "100%",
}