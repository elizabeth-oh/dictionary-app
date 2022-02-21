import React from 'react';
import './Photos.css'

export default function Photos(props) {
    if (props.photos) {
        return (
            <section>
                <div className="row">
                        {props.photos.map(function(photo,index){
                            return(
                                <div className="col-4" key={index}>
                                    <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                                        <img className="img-fluid photos" src={photo.src.landscape} alt="photos" />
                                    </a>
                                </div>
                            )
                        })
                        }
                </div>
            </section>
        )
    }
    else {
        return null;
    }}