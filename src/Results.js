import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import './Results.css';

export default function Results(props) {
    if (props.results === null) {
        return (
          null
        );
      } else {
        return (
          <div className = "results">
            <section>
              <h2>{props.results.word}</h2>
                <div>
                  {props.results.phonetics.map(function(phonetic, index){
                    if (index < 1) {
                    return (
                        <Phonetic phonetic={phonetic} key={index} />
                    )} else {return null}
                  })}
                </div>
            </section>
            <section>
              <div>
                {props.results.meanings.map(function(meaning, index) {
                  return (
                          <Meaning meaning={meaning} key={index}/> 
                  );
                  })}
              </div>
             </section>
          </div>
        );
      }
}
