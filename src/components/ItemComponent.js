import React from "react";

export default function ItemComponent(props){
//<p>{JSON.parse(props.itemObject).id ? JSON.parse(props.itemObject).name : "Empty"}</p>

//<h4 onClick={props.selectAnswer}>{props.name}</h4>  text mode
    return <div>
            
            <img onClick={props.selectAnswer} height="64px" width="64px" src={props.url} alt="Missing"></img>
        </div>

}