import React from 'react'
import '../css/navbar.css'
import donateBtn from '../media/images/LINO.svg'

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
                <img src={donateBtn} height="70px" alt="Missing " className="donationBtn" onClick={() => openInNewTab("https://ko-fi.com/linodev")}></img>
            </div>
            
        </nav>
    )
}