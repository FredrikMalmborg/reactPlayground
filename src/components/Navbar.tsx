import React, { CSSProperties } from "react"

export default class Layout extends React.Component{

    render() {
        return (
            <nav style={navStyle}>
                <h1 style={headerStyle}>React <br/>Playground</h1>
            </nav>
        )
    }
}

const navStyle: CSSProperties = {
    position:"absolute",

    padding: ".5rem",
    // background:"#ea05",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const headerStyle: CSSProperties = {
    borderLeft:"1rem solid #333",

    padding: ".5rem",

    fontFamily: "Helvetica",
    fontSize: "3rem",
    
    letterSpacing: "-.3rem",
    lineHeight: "2.5rem"
}