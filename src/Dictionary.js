import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

    function showWordInfo(response) {
        console.log(response.data[0]);
    }
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showWordInfo);

    }
    function newWorld(event) {
        setKeyword(event.target.value);
    }
    return(
        <div className="DictionaryForm">
            <form onSubmit={search} >
                <input type="search" onChange={newWorld}/>
                <input type="submit" value="SEARCH" />
            </form>
        </div>
    );
}