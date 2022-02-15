import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css'


export default function Dictionary() {
    let [keyword, setKeyword] = useState(""); 
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse);
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
        </div>
    )
}