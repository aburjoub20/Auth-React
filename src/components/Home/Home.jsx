import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import jwt from 'react'
// import {navigate , usenavigate} from 'react'
// jwt use for encode and decode token 
// jwt use like middleware   to show and hide component and url pages 
export default function Home() {
let[TrandingMovies , setTrandingMovies]=useState([]);
async function getMoviesData(parameter , callfunction){
  let{data} = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=bd11009c784c0231fba2e268f4ef16ab');
  setTrandingMovies(data.results);
  console.log(data.results);
}
useEffect( () => {// when api in working success call this function 
  getMoviesData();
},[])
  return (
//usenavigate navigate to change comppont when condition is apploy 
  <div className='row'>
    {TrandingMovies.map( (movie,index)=>
    <div className='col-md-3'>
      <div className='movies'>
<h2>{movie.id}</h2>
        </div>
      </div>
    
    )}
  </div>
  )
}
