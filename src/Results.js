import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';

export default function Results(props) {
    if (props.results === null) {
        return (
          null
        );
      } else {
        return (
          <div className = "results">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index){
              if (index < 1) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              )} else {return null}
            })}  
            {props.results.meanings.map(function(meaning, index) {
            return (
                <div key={index}>
                    <Meaning meaning={meaning} />
                </div> 
            );
            })}
          </div>
        );
      }
}
