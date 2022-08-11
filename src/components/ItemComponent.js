import React from "react";

export default function ItemComponent(props){
//<p>{JSON.parse(props.itemObject).id ? JSON.parse(props.itemObject).name : "Empty"}</p>
    return <div>
            <h4 onClick={props.selectAnswer}>{props.name}</h4>
        </div>

}