import React from 'react';
import Synonyms from './Synonyms';

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <ul>
            {props.meaning.definitions.map(function(definition,index) {
                return (                    
                    <li key={index} className="definition">
                        {definition.definition}
                        <br />
                        <em>
                            {definition.example}
                        </em>
                        <br />
                        <Synonyms synonyms={definition.synonyms} key={index} />
                    </li>
                )
            })}
            </ul>
        </div>
    )
}