import React from 'react';
import playIcon from './playIcon.svg'
import './PhoneticSound.css'



export default function PhoneticSound(props) {
    var phoneticAudio = props.audioUrl;
    var playPhoneticAudio = () => {
        var audio = new Audio(phoneticAudio);
        audio.play();
    }

    if (props.audioUrl) {
        return (
            <div>
                <img src={playIcon} alt="Play button" className="playIcon" onClick={ () => playPhoneticAudio() }  />
            </div>
        )
    } else {
        return null
    }

    
}