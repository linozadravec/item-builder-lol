import React from "react";

export default function SelectedComponents(props){
    return <div>
            <img className="itemSelectedBtn" onClick={props.handleRemove} height="50px" width="50px" src={`/Components/${props.url}`} alt="Missing"></img>
        </div>

}