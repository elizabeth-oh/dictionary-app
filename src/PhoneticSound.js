import React from 'react';
import playIcon from './playIcon.svg'
import './PhoneticSound.css'



export default function PhoneticSound(props) {

    var phoneticAudio = props.audioUrl;
    var playPhoneticAudio = () => {
        var audio = new Audio(phoneticAudio);
        audio.play();
    }

    return (
        <img src={playIcon} alt="Play button" className="playIcon" onClick={ () => playPhoneticAudio() }  />
    )
}