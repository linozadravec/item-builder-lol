import React from "react";

export default function ItemCompleted(props){
    
    return  <div>
                <h2>{JSON.parse(props.completedItem).id ? JSON.parse(props.completedItem).name : "Empty"}</h2>
            </div>

}