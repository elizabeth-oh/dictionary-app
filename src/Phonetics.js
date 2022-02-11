import React from 'react';

export default function Phonetics(props) {
    return (
        <div className="phonetics">
            <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
            <br />
            {props.phonetics.text}
        </div>
    )
}