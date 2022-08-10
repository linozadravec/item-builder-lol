import React from "react";
import itemComponents from "../ComponentItemsData"

export default function Answer(){

    let emptyObjString = JSON.stringify({"name":"Empty","id":0})
    const [answerItem, setAnswerItem] = React.useState(emptyObjString)

    React.useEffect(() => function(){
        const generatedItem = itemComponents.itemList[Math.floor(Math.random() * itemComponents.itemList.length)]

        setAnswerItem(JSON.stringify(generatedItem))
    },[])

    return <div>
            <p>{JSON.parse(answerItem).id ? JSON.parse(answerItem).name : "Empty"}</p>
        </div>

}