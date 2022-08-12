import React from "react";

export default function ItemCompleted(props){
    //text mode
    //<h2>{JSON.parse(props.completedItem).id ? JSON.parse(props.completedItem).name : "Empty"}</h2> 
    return  <div>
                <img height="64px" width="64px" src={JSON.parse(props.completedItem).id ? JSON.parse(props.completedItem).url : "Empty"} alt="Missing"></img>
            </div>

}