import React from 'react'
import { createContext, useState } from 'react';

const signUpContext = createContext(null);


export const ContextProvider=({children})=>{
  const [token,setToken]=useState(localStorage.getItem('token'))
    
    const StoreTokenTLS=(tk)=>{
      setToken(tk);
        return localStorage.setItem('token',tk)

    }
    const isLogin=!!token;

    const RemoveTokenTLS=()=>{
      setToken('')
        return localStorage.removeItem('token')
    
    }
  return(
    <signUpContext.Provider value={{StoreTokenTLS,RemoveTokenTLS,isLogin}}>
    {children}
</signUpContext.Provider>
  )

}

export default signUpContext;