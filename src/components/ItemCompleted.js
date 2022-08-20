import React from "react";

export default function ItemCompleted(props){
    return  <div>
                <img className="itemCompletedBtn" height="64px" width="64px" src={`/Complete/${props.completedItem.id ? props.completedItem.url : "Empty"}`} alt="Missing"></img>
            </div>

}