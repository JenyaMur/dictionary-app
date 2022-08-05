import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function WordInformation(props) {
    if(props.data) {
         return (
            <div className="WordInformation">
            <h2>
                {props.data.word} 
            </h2>
            {props.data.phonetics.map(function(phonetic, index) {
                return (
                    <div key={index}>
                       <Phonetics phonetic={phonetic} />
                    </div>
                );
            })}
         {props.data.meanings.map(function(meaning, index) {
            return (
                 <div key={index}>
                        <Meaning meaning={meaning} />
              </div>
            );
             
            })}

             </div>
    );
    } else {
        return null
    }
   
}