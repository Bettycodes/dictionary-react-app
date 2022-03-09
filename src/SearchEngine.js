import React, {useState} from "react";
import "./general.css";
import axios from "axios";

export default function SearchEngine(){
let [word, setWord] = useState("");


function response(response) {
    console.log(response.data[0]);
}

function search(event){
    event.preventDefault();
    alert(`searching for ${word}`);

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
    </div>
    );

}