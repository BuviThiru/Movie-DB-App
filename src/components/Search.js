import { MovieContext } from "../utils/context"

export default function Search() {
 const {query,setQuery,error} = MovieContext();
 console.log(query)
 return(
    <form  onSubmit={(e)=>e.preventDefault()}>
        <h1>Search for the Movies</h1>
        <input onChange ={(e)=>setQuery(e.target.value)} placeholder="Search" value={query}/>
        {error.display && <div>{error.Message}</div>}
    </form>
 )
}
