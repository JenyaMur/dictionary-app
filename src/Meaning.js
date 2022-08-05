import React from "react";
import ExampleOfDefinition from "./ExampleOfDefinition";
import SynonymsOfDefinition from "./SynonymsOfDefinition";


export default function Meaning(props) {
    return (
        <div>
            <dl>
                <dt>{props.meaning.partOfSpeech}</dt>
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div key={index}>
                           <dd><strong>Definition:</strong> {definition.definition}</dd> 
                           <ExampleOfDefinition example={definition.example}/>
                           <SynonymsOfDefinition synonym={definition.synonyms} />
                        </div>
                    );
                })}
            </dl>
        </div>
    );
}