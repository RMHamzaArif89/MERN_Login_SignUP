import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signUpContext from './contextApi/signup_context'
function Logout() {
    const {RemoveTokenTLS}=useContext(signUpContext)
    useEffect(()=>{
  RemoveTokenTLS()
    },[])
    const navigate=useNavigate()
  return (
   navigate('/login')
  )
}

export default Logout
