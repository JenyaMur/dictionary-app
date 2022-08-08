import React from "react";
import ReactPlayer from 'react-player';

export default function Phonetics(props) {
    if(props.phonetic.audio) {
        return(
          <div className="Phonetics">
            <div className="row">
                <div className="col-9">
                   <ReactPlayer url={props.phonetic.audio} controls={true} height={30} width={220} />  
                </div>
                <div className="col-3 phonetic-text">
            {props.phonetic.text}
            </div>
            </div>  
        </div>
        );
    } else {
        return(
          <div className="row">
                <div className="col-9"></div>
          <div className="col-3 phonetic-text">
            {props.phonetic.text}
        </div>
        </div>
        );
    }
}