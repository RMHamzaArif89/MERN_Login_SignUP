import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import signUpContext from './contextApi/signup_context'
function Logout() {
    const {RemoveTokenTLS}=useContext(signUpContext)
    useEffect(()=>{
  RemoveTokenTLS()
    },[RemoveTokenTLS])
    const navigate=useNavigate()
  return (
   <Navigate to="/login"/>
  )
}

export default Logout
