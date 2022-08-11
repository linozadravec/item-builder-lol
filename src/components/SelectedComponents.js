import React from "react";

export default function SelectedComponents(props){
    return <div>
            <p onClick = {props.handleRemove} >{props.selected}</p>
        </div>

}