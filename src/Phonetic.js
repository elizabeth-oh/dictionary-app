import React from 'react';
import PhoneticSound from './PhoneticSound'; 

export default function Phonetics(props) {
    if (props.phonetic.text && props.phonetic.audio) {
        return (
            <div className="phonetic">
                <span>
                    <PhoneticSound audioUrl={props.phonetic.audio} />
                </span>
                <span className="phoneticText">{props.phonetic.text}</span>
            </div>
        )
    } else {
        return null
    }
}