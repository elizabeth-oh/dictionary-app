import React, { useState } from 'react';
import './Dictionary.css'

export default function Dictionary() {
    const [keyword, setKeyword] = useState(""); 

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Searching for definition of ${keyword}`)
    }

    function handleChange(event) {
        setKeyword (event.target.value);
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