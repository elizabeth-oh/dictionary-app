import React from 'react';
import './Synonyms.css'

export default function Synonyms(props) {
    if (props.synonyms) {
        return(
            <div>
                <span className="synonymsHeader">Synonyms: </span>
                <ul className="synonyms list-group list-group-horizontal-sm flex-wrap">
                    {props.synonyms.map(function(synonym,index) {
                        return(
                            <li key={index} className="list-group-item">
                                {synonym}
                            </li>
                        )   
                    })}
                </ul>
            </div>
        )}
    else {
        return null
    }
}
