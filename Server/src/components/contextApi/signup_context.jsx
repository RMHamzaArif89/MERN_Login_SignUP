import React from 'react'
import { createContext, useState } from 'react';

const signUpContext = createContext(null);


export const ContextProvider=({children})=>{
  const [token,setToken]=useState(localStorage.getItem('token',tk))
    
    const StoreTokenTLS=(tk)=>{
        return localStorage.setItem('token',tk)

    }

    const RemoveTokenTLS=()=>{
        return localStorage.removeItem('token',tk)
        setToken('')
    }
  return(
    <signUpContext.Provider value={{StoreTokenTLS,RemoveTokenTLS}}>
    {children}
</signUpContext.Provider>
  )

}

export default signUpContext;