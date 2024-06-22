import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
function Home() {
    const navigate=useNavigate()
    const authenticateHomePage=async()=>{
        try{
            const response=await fetch('http://localhost:5000/api/user/home',{
              method:'GET',
              headers:{
            "Content-Type":'application/json'
              },
              credentials: 'include'  
          })
          console.log(response)
           if(response.ok){
            
           
          console.log('authorization home page')
           }else{
              console.log('login error')
              navigate('/login')
           }
              }
          
            catch(e){
              console.log('login error',e)
            }
    }
    useEffect(()=>{
 authenticateHomePage()
    },[])
  return (
    <>
    

    <div id="home"></div>   
    <div className="con-1">
        <div className="con1-t">
            the <br/> Cafe
        </div>
        <div className="con1-t2">
            open from 6am to 6pm
        </div>
    </div>
    <div className="con-2">
        <div id="about"></div>
        <div className="text">
            <div className="con2-t">
                About the Cafe
            </div>
        </div>


        <div className="con2-t2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident quia aliquid delectus? Nulla
            dignissimos sequi ducimus obcaecati quo possimus debitis, doloribus error cupiditate architecto tempora
            cumque hic fugiat aut eos. Commodi, placeat! Quibusdam, error!
            <br/> <br/>
            dignissimos sequi ducimus obcaecati quo possimus debitis, doloribus error cupiditate architecto tempora
            cumque hic fugiat aut eos. Commodi, placeat! Quibusdam, error!
        </div>



        <div className="con2-t3">
            <p className="text3"> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit officia dolore
                fugit."<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>



        <div className="con2-img"></div>



        <div className="t4" style={{margin:"2%"}}>
            <span style={{fontSize:"1.4rem", color:"black", fontWeight:"bold"}}>Opening Hours: </span>
            <span style={{fontSize: "1.2rem", color:"grey"}}> Everyday from 6am to 6pm</span>
        </div>
       

        <div className="t4" style={{margin:"2%"}}>
            <span style={{fontSize:"1.4rem", color:"black", fontWeight:"bold"}}>Address</span>
            <span style={{fontSize: "1.2rem", color:"grey"}}> 15 Adr Street, 5014, Fsd</span>
        </div>
       

    </div>

    </>
  )
}

export default Home 
