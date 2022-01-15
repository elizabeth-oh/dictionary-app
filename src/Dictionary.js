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
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleChange(event) {
        setKeyword (event.target.value)
    }

    return (
        <div className = "dictionary">
            <form className = "searchForm" onSubmit = {handleSubmit}>
                <input type = "search" placeholder = "search here" onChange = {handleChange}/>
                <input type = "submit" value="Search" />
            </form>
            <Results results={results} />
        </div>
    )
}