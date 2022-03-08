import React, {useState} from "react";
import "./general.css";

export default function SearchEngine(){
let [word, setWord] = useState("");


function search(event){
    event.preventDefault();
    alert("searching");
}

function handeleWordChange(event){
    setWord(event.target.value);
  
}

return (
   <div className="Dictionary">
     <form> onSubmit={search}
      <input type="search" onChange=
      {handeleWordChange} />
     </form>
    </div>
    );

}