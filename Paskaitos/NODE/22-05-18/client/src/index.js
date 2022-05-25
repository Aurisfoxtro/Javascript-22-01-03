import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './components/registration/Registration.js'
import ProfileCreate from './components/profile-create/ProfileCreate.js'
import ProfileList from './components/profile-list/ProfileList.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ProfileList />}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/create-profile" element={<ProfileCreate />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


