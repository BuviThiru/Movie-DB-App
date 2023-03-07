import React from 'react'
import { Link } from 'react-router-dom';
import { MovieContext } from '../utils/context'

function Movies() {
    const {data,error,isLoading}= MovieContext();
    console.log(data)
    if(error.display) return(<div>{error.Message}</div>)
    if(isLoading) return (<div>Loading...</div>)
  return (
    <div>
        <h2>Movies</h2>
        {data?.map((movie)=>{
            const {Title,Poster,imdbID:id,Year} = movie;
            return(<div key ={id}>
                <Link to={`/movies/${id}`}><img src = {Poster} alt ="poster"/></Link>
            <div>{Year}</div>
             <div>{Title}</div>
             </div>)
        })}
    </div>
  )
}

export default Movies