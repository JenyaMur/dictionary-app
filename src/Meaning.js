import React from "react";
import ExampleOfDefinition from "./ExampleOfDefinition";
import SynonymsOfDefinition from "./SynonymsOfDefinition";

export default function Meaning(props) {
    return (
        <div className="Meaning">
               <h3>{props.meaning.partOfSpeech}</h3> 
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div key={index}>
                           <div>{definition.definition}</div> 
                           <ExampleOfDefinition example={definition.example}/>
                           <SynonymsOfDefinition synonym={definition.synonyms} />
                        </div>
                    );
                })}
           
        </div>
    );
}