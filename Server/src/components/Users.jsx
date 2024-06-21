import React, { useContext, useEffect } from 'react'
import './users.css'
import signUpContext from './contextApi/signup_context'

function Users() {
    const {usersData,getData}=useContext(signUpContext)


    useEffect(()=>{
      getData()
    },[])


    const deleteUser=async(id)=>{
      
          try{
            const response=await fetch(`http://localhost:5000/api/user/deleteUser/${id}`,{
              method:'DELETE',
              headers:{
            "Content-Type":'application/json'
              },
              // body:JSON.stringify(values)
          })
          // console.log(response)
          const data=await response.json()
           if(response.ok){
            
           getData()
           }
              }
          
            catch(e){
              console.log('signup',e)
            }
      }
    



   

  return (
    <div className='users'>
      {
        usersData.map((user)=>{
            // cosnt{name,email,age}=user
           return(
            <div className="users-card">
            <div className="users-name">{user.name}</div>
            <div className="users-email">{user.email}</div>
            <div className="users-age">{user.age}</div>
            <div className="delete" onClick={()=>deleteUser(user._id)}>Delete</div>
            </div>
           )
        })
      }
      
    </div>
  )
}

export default Users
