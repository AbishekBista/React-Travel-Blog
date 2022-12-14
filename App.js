import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const travelData = data.map(item => (
        <Card 
            item={item}/>
    ))
    return (
        <div className="app-container">
            <Header />
            {travelData}
    </div>
    )  
}