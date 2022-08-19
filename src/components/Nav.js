import React from 'react'
import '../css/navbar.css'
import donateBtn from '../media/images/donateButton.svg'
import About from './About'
import Main from './Main'

import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Nav(){

    function openInNewTab(url){
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        
      <div>
        <nav >
            <div>
                <ul className="navMenu">
                    <li>
                        <Link to="/">Play</Link>
                    </li>
                    <li>
                        <Link to="/test">Tbd</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>  
                </ul>
            </div>
            <div>
                <img src={donateBtn} height="70px" alt="Missing " className="donationBtn" onClick={() => openInNewTab("https://ko-fi.com/linodev")}></img>
            </div>
        </nav>
            <Routes>
                <Route path="about" element={<About />}/>
                <Route path="/" element={<Main />}/>
            </Routes>
      </div>
   

        
    )
}