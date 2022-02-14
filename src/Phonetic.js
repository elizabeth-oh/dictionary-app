import React from 'react';
import PhoneticSound from './PhoneticSound'; 

export default function Phonetics(props) {
    return (
        <div className="phonetic">
            <PhoneticSound audioUrl={props.phonetic.audio} />
            <span>{props.phonetic.text}</span>
        </div>
    )
}