import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';
import './Dictionary.css'


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword); 
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos)
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f917000010000014a9ffbf0fa0e471e9bc5e68bbccb5b69";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}`
        axios.get(pexelsUrl , { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleChange(event) {
        setKeyword (event.target.value)
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="dictionary">
                <section className="search">
                    <p className="headline">What word would you like to look up?</p>
                    <form 
                        className="input-group rounded" 
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="search" 
                            defaultValue={props.defaultKeyword}
                            className="form-control rounded" 
                            placeholder="Look up a word..." 
                            onChange = {handleChange} 
                        />
                    </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
        } else {
            load();
            return "Loading";
        }
}