import React, { CSSProperties } from "react"

interface Props {
    sectionTitle: string,
    img: string
}



export default class Layout extends React.Component<Props> {
    render() {
        const {sectionTitle, img} = this.props

        return <div className="sectionWrapper" style={sectionWrapper(img)}>
            <h3 style={textStyle}>{sectionTitle}</h3>
        </div>
    }
}

const sectionWrapper: (img: string) => CSSProperties = (img) => ({
    width:"100%",
    // height: `calc(100% / ${document.querySelectorAll('.sectionWrapper').length})`,
    height:"calc(100% / 4)",
    
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden"
})

const textStyle: CSSProperties = {
    fontFamily: "helvetica",
    textTransform: "uppercase",
    fontSize:"40vh",
    
    // color:"#4faca188" // sky
    color:"#eca13a" // forest
    // color:"#deeaf6" // sea
}