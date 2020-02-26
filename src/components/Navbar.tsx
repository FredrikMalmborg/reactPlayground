import React, { CSSProperties } from "react"

interface Props {
    onClickHeader: () => void
}
export default class Navbar extends React.Component<Props>{
    render() {
        return (
            <nav style={navStyle}>
                <h1 style={headerStyle} onClick={this.props.onClickHeader}>React <br/>Playground</h1>
            </nav>
        )
    }
}

const navStyle: CSSProperties = {
    position:"absolute",

    padding: ".5rem",

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
    lineHeight: "2.5rem",

    cursor: "pointer",
}