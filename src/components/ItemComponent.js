import React from "react";

export default function ItemComponent(props){
    return <div>
            
            <img className="itemComponentBtn" onClick={props.selectAnswer} height="64px" width="64px" src={`/Components/${props.url}`} alt="Missing"></img>
        </div>

}