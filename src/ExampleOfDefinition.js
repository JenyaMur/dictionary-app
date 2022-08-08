import React from "react";

export default function ExampleOfDefinition(props) {
    if(props.example) {
         return (
         <p><em>Example:</em> <em>{props.example}</em></p>
    );
    } else { return null}
   
}