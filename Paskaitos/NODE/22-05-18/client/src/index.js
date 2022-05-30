import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './components/registration/Registration.js'
import ProfileCreate from './components/profile-create/ProfileCreate.js'
import ProfileEdit from './components/profile-edit/ProfileEdit.js'
import ProfileList from './components/profile-list/ProfileList.js'
import Profile from './components/profile/Profile.js'
import Header from './components/header/Header.js'
import Login from './components/login/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<ProfileList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/create-profile" element={<ProfileCreate />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/edit" element={<ProfileEdit />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


