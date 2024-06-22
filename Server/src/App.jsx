import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import './App.css'
import Sign_up from './components/Sign_up'
import Home from './components/home/Home'
import Nav_bar from './components/Nav_bar';
import Logout from './components/home/Logout';
import Users from './components/Users'

function App() {

  return (
   <>
       <BrowserRouter>
       <Nav_bar/>
      <Routes>
       
          {/* <Route index element={<Home />} /> */}
          <Route path="sign_up" element={<Sign_up />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />       
          <Route path="users" element={<Users/>} />       
          <Route path="logout" element={<Logout />} />
          {/* <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
