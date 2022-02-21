import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css'


export default function Dictionary() {
    let [keyword, setKeyword] = useState(""); 
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos)
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f917000010000014a9ffbf0fa0e471e9bc5e68bbccb5b69";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}`

        axios.get(pexelsUrl , { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse)
    }

    function handleChange(event) {
        setKeyword (event.target.value)
    }

    return (
        <div className="dictionary">
            <form className="input-group rounded" onSubmit = {handleSubmit}>
                <input type="search" className="form-control rounded" placeholder="Search" onChange = {handleChange} aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </form>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}