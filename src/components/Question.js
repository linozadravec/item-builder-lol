import React from "react";
import itemsData from '../CompleteItemsData.js'

export default function Question(){

    let emptyObjString = JSON.stringify({"name":"Empty","id":0})
    const [questionItem, setQuestionItem] = React.useState(emptyObjString)
    let quest

    function generateItem(){
        
        const generatedItem = itemsData.itemList[Math.floor(Math.random() * itemsData.itemList.length)]
        quest = generatedItem
        console.log(generatedItem)
        setQuestionItem(JSON.stringify(generatedItem))
    }

    return  <div>
                <button onClick={generateItem}>Generate1132</button>
                <p>{JSON.parse(questionItem).id ? JSON.parse(questionItem).name : "Empty"}</p>
            </div>

}