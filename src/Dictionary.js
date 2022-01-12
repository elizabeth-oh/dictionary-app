import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css'

export default function Dictionary() {
    const [keyword, setKeyword] = useState(""); 

    function handleResponse(response) {
        console.log(response.data[0]);
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
        <div className = "dictionary">
            <form className = "searchForm" onSubmit = {handleSubmit}>
                <input type = "search" placeholder = "search here" onChange = {handleChange}/>
                <input type = "submit" value="Search" />
            </form>
        </div>
    )
}