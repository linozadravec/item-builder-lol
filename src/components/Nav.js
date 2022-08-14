import React from 'react'
import '../css/navbar.css'

export default function Nav(){

    function openInNewTab(url){
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <nav className="navMenu">
            <div>
            <a href="#play" >Play</a>
            <a href="#about" >About</a>
            <div className="dot"></div>
            </div>
            <div>
            <button className="donationBtn" onClick={() => openInNewTab("https://ko-fi.com/linodev")}> Buy me a Teemo skin</button>
            </div>
            
        </nav>
    )
}