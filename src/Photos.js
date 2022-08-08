import React from "react";

export default function Photos(props) {
    if (props.photos) {
        return(
        <section>
            <div className="row">
                {props.photos.map(function(photo, index) {
                    return (
                           <div className="col-4 Photos" key={index}>
                        <img src={photo.src.tiny} className="img-fluid" alt={photo.alt}/>
                    </div>
                    );
                 
                }     
                )}
            </div>
        </section>
    ); 
    } else {return null;}
    
}