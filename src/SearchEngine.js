import React, {useState} from "react";
import "./general.css";
import axios from "axios";
import Definition from './Definition';

export default function SearchEngine(){
let [word, setWord] = useState("");
let[definition, setDefinition] = useState({})


function response(response) {
    setDefinition(response.data[0]);
}

function search(event){
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(response)
}

function handeleWordChange(event){
    setWord(event.target.value);
  
}

return (
   <div className="Dictionary">
     <form onSubmit={search}> 
      <input type="search" onChange=
      {handeleWordChange} />
     </form>
     <Definition definition={definition}/>
    </div>
    );

}