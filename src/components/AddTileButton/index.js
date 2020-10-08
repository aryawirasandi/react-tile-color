import * as React from "react";
import {func, string} from "prop-types";

export default function AddTileButton({onClick, color}){

    const buttonStyle = {
        backgroundColor : color,
        display : "inline-block",
        width : 20,
        height : 20,
        cursor : "pointer",
        border : "1px solid black"
    }

    return (
        <div style={buttonStyle} onClick={onClick}/>
    )
}

AddTileButton.propTypes = {
    onClick : func.isRequired,
    color : string.isRequired
}