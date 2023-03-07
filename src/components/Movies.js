import React from 'react'
import { MovieContext } from '../utils/context'

function Movies() {
    const {data}= MovieContext();
    console.log(data)
  return (
    <div>
        <h2>Movies</h2>
        {data?.map((movie)=>{
            const {Title,Poster,imdbID:id,Year} = movie;
            return(<div key ={id}>
                <img src = {Poster} alt ="poster"/>
            <div>{Year}</div>
             <div>{Title}</div>
             </div>)
        })}
    </div>
  )
}

export default Movies