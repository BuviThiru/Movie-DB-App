import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchdata from '../utils/useFetchdata';

function MovieDescription() {
    const {id} = useParams();
    const {isLoading,data} = useFetchdata(`&i=${id}`)
    console.log("Single",data)
    if(isLoading) return(<div>Loading....</div>)
  return (
    <div>
    <div>MovieDescription</div>
    <img src ={data.Poster} alt ="poster"/>
    <div>{data.Title}</div>
    </div>

  )
}

export default MovieDescription