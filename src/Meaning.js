import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
      <div className="meaningContainer px-4">
        <div className="row gx-5">
    <div className="Meaning col">
       <h3>{props.meaning.partOfSpeech}</h3>
       {props.meaning.definitions.map(function (definition, index) {
         return(
           <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                  <br />
                  <Synonyms synonyms={definition.synonyms} />
                </p>
            </div>
          );
        })}
    </div>
    </div>
    </div>
  );
}