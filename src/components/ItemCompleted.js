import React from "react";
import itemsCompletedData from '../CompleteItemsData.js'

export default function ItemCompleted(props){
    
    return  <div>
                <p>{JSON.parse(props.completedItem).id ? JSON.parse(props.completedItem).name : "Empty"}</p>
            </div>

}