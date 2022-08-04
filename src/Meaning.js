import React from "react";

export default function Meaning(props) {
    return (
        <div>
            <dl>
                <dt>{props.meaning.partOfSpeech}</dt>
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div key={index}>
                           <dd>{definition.definition}</dd> 
                           <p><em>{definition.example}</em></p>
                        </div>
                    );
                })}
            </dl>
        </div>
    );
}