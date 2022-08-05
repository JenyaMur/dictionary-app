import React from "react";
import ReactPlayer from 'react-player';
import "./Phonetics.css";

export default function Phonetics(props) {
    if(props.phonetic.audio) {
        return(
          <div className="Phonetics">
            <div>
            {props.phonetic.text}
            </div>
             <ReactPlayer url={props.phonetic.audio} controls={true} height={30}/>  
        </div>
        );
    } else {
        return(
          <div>
            {props.phonetic.text}
        </div>
        );
    }
}