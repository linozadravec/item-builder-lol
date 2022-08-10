import React from 'react'
import Question from './Question'
import Answer from './Answer'
import '../css/main.css'
import itemsData from '../CompleteItemsData.js'

export default function Main(){
    return (
        <main>
            <h3>Item builder</h3>
            <div>
                <div className="main--question">
                    <Question />
                </div>
            </div>  
            <div className="main--answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
                
            
        </main>
    )
}