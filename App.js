
import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

// import Navbar from './components/nav';
import Login from './Components/Login';

import Footer from './Components/Footer';

import MultiActionAreaCardGrid from './Components/combo';
import BasicExample from './commain/navgift';
import Mulm from './Components/normalgift';
import Dulm from './Components/manygifts';
import DarkVariantExample from './Components/slideshow';
import BasicExample2 from './commain/mainpic';
import CustomerFeedback from './Components/feedback';
import HomePage from './Components/feedback';
import PrintOfferCards from './Components/hoofer';
import AboutUs from './Components/aboutus';
import TermsAndConditions from './Components/terms';




const App = () => {
  return (
    <div className="app">
      <div>
    <Router>
      <nav className='navi'>
      
            
        <ul className='Hello'>
              <p className="giftoo-brand">🎁Giftoo</p>
        
          <li className='actives'>
          
      <Link style={{ textDecoration: 'none',color:'black'}}to="/">HOME</Link>
      </li>
      <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/login">LOGIN</Link>
        </li>
        <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/person">CUSTOMERIZE</Link>
        </li>
        <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/per">GIFTS</Link>
        </li>
        <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/com">COMBOS</Link>
        </li>
        <li className='actives'>
        <Link style={{ textDecoration: 'none',color:'black'}}to="/abt">ABOUT US</Link>
        </li>
        
        </ul>
        </nav><br></br><br></br>
        <div className="content-container">
        <Routes>
        <Route exact path="/login" element={ <Login/>} />
        <Route exact path="/com" element={<MultiActionAreaCardGrid/>}/>
        <Route exact path="/person" element={<Mulm/>}/>
        <Route exact path="/per" element={<Dulm/>}/>
        <Route exact path="/abt" element={<AboutUs/>}/>
        <Route exact path="/dash" element={<BasicExample2/>}/>
        <Route exact path="/term" element={<TermsAndConditions/>}/>
        
        
        
         </Routes>
         </div>
         </Router>
          </div><br></br>
          <br></br>
            <div><center>
              
            </center>

            </div>
            
            <h3>NEW ARRIVALS</h3><br></br><br></br>
            <BasicExample2/>
          <HomePage/>
          
           <Footer/>
            
        </div>
    )
  }
  export default App;