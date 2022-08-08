import React, { useState } from "react";
import axios from "axios";
import WordInformation from "./WordInformation";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultWord);
    let [info, setInfo] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function showWordInfo(response) {
        setInfo(response.data[0]);
    }
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showWordInfo);
    }
    function handleSubmit(event) {
        event.preventDefault();
       search();
    }
    function newWorld(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }
    if(loaded) {
        return(
        <div className="Dictionary">
            <h1>What word do you want to look up?</h1>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="row text-end mb-3">
                        <div className="col-9 col-sm-10">
                             <input type="search" onChange={newWorld} defaultValue={props.defaultWord} className="w-100"/>
                        </div>
                        <div className="col-3 col-sm-2">
                            <input type="submit" value="SEARCH" className="search-button"/>
                        </div>
               
                
                </div>
            </form>
            </div>
                <WordInformation data={info} />      
        </div>
    );
    } else {
        load();
    }
}