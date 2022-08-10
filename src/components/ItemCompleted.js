import React from "react";
import itemsCompletedData from '../CompleteItemsData.js'

export default function ItemCompleted(props){
    
    return  <div>
                <h2>{JSON.parse(props.completedItem).id ? JSON.parse(props.completedItem).name : "Empty"}</h2>
            </div>

}