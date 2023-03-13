import { useRef } from "react";
import { MovieContext } from "../utils/context"

export default function Search() {
 const {query,setQuery,error} = MovieContext();

const inputRef = useRef("")


function submitHandle(){
    const valRef = inputRef.current.value
    setQuery(valRef);
}


 console.log(query)
 return(
    <form  onSubmit={(e)=>e.preventDefault()}>
        <h1>Search for the Movies</h1>
        <input onChange ={submitHandle} placeholder="Search" ref={inputRef}/>
        {error.display && <div>{error.Message}</div>}
    </form>
 )
}
