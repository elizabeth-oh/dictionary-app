import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <ol>
            {props.meaning.definitions.map(function(definition,index) {
                return (                    
                    <li key={index} className="definition">
                        {definition.definition}
                        <br />
                        <em className="examples">
                            {definition.example}
                        </em>
                        <Synonyms synonyms={definition.synonyms} />
                    </li>
                )
            })}
            </ol>
        </div>
    )
}