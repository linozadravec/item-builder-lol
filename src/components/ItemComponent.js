import React from "react";
import itemComponentsData from "../ComponentItemsData"

export default function ItemComponent(props){

    console.log(props.itemObject)
//<p>{JSON.parse(props.itemObject).id ? JSON.parse(props.itemObject).name : "Empty"}</p>
    return <div>
            <p>{props.name}</p>
        </div>

}