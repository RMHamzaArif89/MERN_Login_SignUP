import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const signUpContext = createContext(null);


export const ContextProvider=({children})=>{
  const [token,setToken]=useState(localStorage.getItem('token'))
  const  [usersData,setuserData]=useState([])
    
    const StoreTokenTLS=(tk)=>{
      setToken(tk);
        return localStorage.setItem('token',tk)

    }
    const isLogin=!!token;

    const RemoveTokenTLS=()=>{
      setToken('')
        return localStorage.removeItem('token')
    
    }


    const getData=async()=>{
      try{
        const response=await fetch('http://localhost:5000/api/user/usersData',{
          method:'GET',
      
      })
      
       if(response.ok){
        const res= await response.json()
        
        
        
    setuserData(res.data)
      
       }
          }
      
        catch(e){
          console.log('data not found',e)
        }
      }
    



    useEffect(()=>{
      getData()
    },[])


    



  return(
    <signUpContext.Provider value={{StoreTokenTLS,RemoveTokenTLS,isLogin,usersData,getData}}>
    {children}
</signUpContext.Provider>
  )

}

export default signUpContext;