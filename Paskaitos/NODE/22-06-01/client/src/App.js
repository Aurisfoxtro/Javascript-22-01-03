import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Registration from './components/registration/Registration.js'
import Header from './components/header/Header.js'
import Login from './components/login/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminArea from './components/admin_area/AdminArea';
import ClientArea from './components/client_area/ClientArea';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userId, setUserId] = useState('')
  const [userRole, setUserRole] = useState(0)

  useEffect(()=>{
    axios.get('/checkAuth', {withCredentials: true})
    .then(resp =>{
      console.log(resp)
      if(resp.data.id){
        setIsLoggedIn(true)
        setUserRole(resp.data.role)
      }
    })
  }, [])

  const handleLoginState = (loggedIn, role)=>{
    setIsLoggedIn(loggedIn)
    setUserRole(role)
  }

  return (
    <Router>
    <Header loggedIn={isLoggedIn}/>
      <Routes>
        {!isLoggedIn && (<Route path="/login" element={<Login state={handleLoginState}/>}/>)}
        {!isLoggedIn && (<Route path="/registration" element={<Registration/>}/>)}
        {userRole === 1 && (<Route path="/admin" element={<AdminArea/>}/>)}
        <Route path="/" element={<ClientArea/>}/>
      </Routes>
    </Router>
  );
}

export default App;
