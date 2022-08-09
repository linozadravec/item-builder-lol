import React from 'react'
import '../css/navbar.css'

export default function Nav(){
    return (
        <nav className="navMenu">
            <a href="#play" >Play</a>
            <a href="#about" >About</a>
            <div className="dot"></div>
        </nav>
    )
}