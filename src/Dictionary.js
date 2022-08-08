import React, { useState } from "react";
import axios from "axios";
import WordInformation from "./WordInformation";
import Photos from "./Photos";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultWord);
    let [info, setInfo] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function showWordInfo(response) {
        setInfo(response.data[0]);
    }
    function showPhotos(response) {
        setPhotos(response.data.photos);
    }
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showWordInfo).catch((error) => {
    alert("Sorry, we don`t know this word. Try another one");
  });

        let pexelsApiKey = "563492ad6f9170000100000137b7b2c7bc684276a93930e65b81f960";
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios.get(pexelsApiUrl, {headers: headers}).then(showPhotos).catch((error) => {console.log(error)});
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
                <Photos photos={photos} />   
        </div>
    );
    } else {
        load();
    }
}