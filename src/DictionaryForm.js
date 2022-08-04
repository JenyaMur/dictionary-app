import React, { useState } from "react";

export default function DictionaryForm() {

    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        console.log(keyword);
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