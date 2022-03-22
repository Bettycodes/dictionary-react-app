import React from "react";

export default function Phonetic(props) {
    return(
        <div className="Phonetic">
        <a href={props.Phonetic.audio} target ="_blank" rel="noreferrer">Listen</a>
        {props.Phonetic.text}
        </div>
    )
}