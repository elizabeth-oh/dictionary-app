import React from 'react';
import PhoneticSound from './PhoneticSound'; 

export default function Phonetics(props) {
    return (
        <div className="phonetic">
            <span>
                <PhoneticSound audioUrl={props.phonetic.audio} />
            </span>
            <span className="phoneticText">{props.phonetic.text}</span>
        </div>
    )
}