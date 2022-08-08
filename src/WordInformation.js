import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function WordInformation(props) {
    console.log(props.data);
    if(props.data) {
         return (
            <div className="WordInformation">
                <section>
            <h2>
                {props.data.word} 
            </h2>
            <div>
                 {props.data.phonetics.map(function(phonetic, index) {
                return (
                    <div key={index}>
                       <Phonetics phonetic={phonetic} />
                    </div>
                );
            })}
            </div>
           </section>
         {props.data.meanings.map(function(meaning, index) {
            return (
                 <section key={index}>
                        <Meaning meaning={meaning} />
              </section>
            );
             
            })}

             </div>
    );
    } else {
        return null
    }
   
}