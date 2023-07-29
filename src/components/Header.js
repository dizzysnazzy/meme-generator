import React from "react"
import '../App.css'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={process.env.PUBLIC_URL + '/horse2.png'} alt="horse"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Developed By - Dismas</h4>
        </header>
    )
}