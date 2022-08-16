import React from "react";

export default function SelectedComponents(props){
    //<p onClick = {props.handleRemove} >{props.selected}</p>
    return <div>
            <img className="itemSelectedBtn" onClick={props.handleRemove} height="50px" width="50px" src={props.url} alt="Missing"></img>
        </div>

}