import React from 'react';
import Synonyms from './Synonyms';

export default function Meaning(props) {
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition,index) {
                return (
                    <ul>
                        <li key={index} className="definition">
                            {definition.definition}
                            <br />
                            <em>
                                {definition.example}
                            </em>
                            <br />
                            <em>
                                <Synonyms synonyms={definition.synonyms} />
                            </em>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}