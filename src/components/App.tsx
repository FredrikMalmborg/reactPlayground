import React, {CSSProperties} from "react";

export default function App() {

    return (
        <div style={header}>
            <h1 style={headerItem}>App</h1>
        </div>
    )
}

const header: CSSProperties = {
    height: '4rem',
    background: '#222',
    color: '#555',
    display: "flex",
    alignItems: "stretch",
    padding: '0 1rem'
}

const headerItem: CSSProperties = {
    fontSize: '1.7rem',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
}