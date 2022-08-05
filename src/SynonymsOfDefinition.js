import React from "react";

export default function SynonymsOfDefinition(props) {
    if (props.synonym.length === 0) {
        return ( null
    );
    } else if(props.synonym.length === 1) {
         return <div>
            <strong>Synonym:</strong>
            <ul>
                {props.synonym.map(function(synonym, index) {
                return ( <li key={index}>{synonym}</li>);
            })}
            </ul>   
        </div>
    } else {
        return <div>
            <strong>Synonyms:</strong>
            <ul>
                {props.synonym.map(function(synonym, index) {
                return ( <li key={index}>{synonym}</li>);
            })}
            </ul>   
        </div>
    }
    
}