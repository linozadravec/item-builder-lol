import React from 'react'
import '../css/main.css'
import itemsData from '../itemsData.js'

// function toJSON(input) {
//     return ("{\n" 
//            + input.replace(/^(\s*)\[("[^"]*")](\s*)=/gm, "$1$2$3:")
//                   .replace(/\{(.*)}(,?)[ \t]*$/gm, "[$1]$2")
//            + "\n}").replace(/,(\s*\})/g, "$1");
// }

// console.log((toJSON(itemsData.toString())))
console.log(itemsData.itemList)

export default function Main(){
    return (
        <main>
            <h3>Item builder</h3>
            <div>
                <p>{JSON.stringify(itemsData.itemList[10])}</p>
            </div>
        </main>
    )
}