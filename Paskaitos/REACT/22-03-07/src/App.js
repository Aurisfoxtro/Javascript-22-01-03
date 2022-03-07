import React from 'react';
import './App.css';
import Jokes from './components/jokes/Jokes';
import Favorites from './components/favorites/Favorites';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './components/nav/Nav';

// klasinis komponentas, senesnis aprasymas 
class App extends React.Component{

    //butinas render metodas
    render(){
      return(
        <div className = "container">
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Jokes/>}/>
                    <Route path="/saved" element={<Favorites/>}/>
                </Routes>
            </Router>
        </div>
      )
    }  
}

export default App;
