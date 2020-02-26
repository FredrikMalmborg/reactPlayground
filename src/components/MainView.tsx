import React, { CSSProperties } from "react"

import NavigationItem from "./NavigationItem"

interface Props {
}
export default class MainView extends React.Component<Props> {

    render() {
        return (
            <div style={contentStyle}>
                <NavigationItem sectionTitle="Sky" img="https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
                <NavigationItem sectionTitle="Forest" img="https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                <NavigationItem sectionTitle="Sea" img="https://images.unsplash.com/photo-1550757750-4ce187a65014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
            </div>
        )
    }
}

const contentStyle: CSSProperties = {
    height: "100%",

    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection: "column",
}