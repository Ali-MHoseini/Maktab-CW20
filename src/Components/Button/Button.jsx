import React from "react";
import "./Button.css";

function Button (props) {

    return(
        <>
            <button
                className="fo-btn"
                style={{backgroundColor:`#${props.color}` , padding:`10px ${props.pad}px`}}
                onClick={props.setData}>
                {props.name}
            </button>
        </>
    )
}

export default Button;