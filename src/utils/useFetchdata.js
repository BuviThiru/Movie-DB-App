import  { useState,useEffect } from 'react';
import {Base_URL} from './api'

function useFetchdata(urlParams) {
    const [isLoading,setIsloading]= useState(true);
    const [error,setError] = useState({display:false,Message:""})
    const [data,setData] = useState(null);
   
    useEffect(()=>{
         loadData();       
    },[urlParams])
 
    async function loadData(){
     
       let response = await fetch(`${Base_URL}${urlParams}`);
       let data = await response.json();
     if(data.Response){
        setData(data.Search || data)
        setError({display:false,Message:""})
       
     }else{
        setError({display:true,Message:data.Error})
     }
     setIsloading(false)    
    }
  return  {isLoading,error,data}

}

export default useFetchdata