import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './components/home';
import MultiActionAreaCard from './Components/combo';
// import Navbar from './components/nav';

const nextlogin = () => {
  return (
    <div className="app">
        <div>
    <Router>
      <nav className='navi'>
        <ul className='Hello'>
          <li className='active'>
      <Link style={{ textDecoration: 'none',color:'black'}}to="/gif">GIFT</Link>
      </li>
      <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/com">COMBOS</Link>
        </li>
        <li className='activess'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/bir">BIRTHDAY</Link>
        </li>
        </ul>
        </nav>
        <Routes>
                <Route exact path="/" element={ <Home />}/>
                    <Route exact path="/com" element={<MultiActionAreaCard/>}/>
                    
                    </Routes>
            </Router>
            </div>
            
            
        </div>
    )
  }
  export default nextlogin;