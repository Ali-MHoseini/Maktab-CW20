import React from "react";
import "./Button.css";

function Button (props) {
    return(
        <>
            <button className="fo-btn" style={{backgroundColor:`#${props.color}` , padding:`10px ${props.pad}px`}}>{props.name}</button>
        </>
    )
}

export default Button;