

import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import "./Header.css";
import Livebutton from './Livebutton.png'; 

import Live_button from "../Live_button/Live_button";

function Header(){

    return(

      <div>
      <header>
        <div className="logo">
          {/* <img src={Livebutton}/> */}
<Live_button/>

        </div>
        
        <div className="menu" id="myTopnav">
          <ul>
            <a href="javascript:void(0);" style={{fontSize: '15px'}} className="icon" onclick="openNav()">☰</a>
           <Link to="/programmers"><li>Programmes</li></Link>
           <Link to="/"><li>Gallery</li></Link>
           <Link to="/Contactus"><li>About us</li></Link>
           <Link to="/"><li>Reality shows</li></Link>
           <Link to="/"><li>TV Derana-Srilanka</li></Link>
           
          </ul>
        </div>
      </header>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
        <Link to="/programmers"><li>Programmes</li></Link>
           <Link to="/"><li>Gallery</li></Link>
           <Link to="/"><li>About us</li></Link>
           <Link to="/"><li>Reality shows</li></Link>
           <Link to="/"><li>TV Derana-Srilanka</li></Link>
      </div>

    
 
    </div>

   

           
    );
}

export default Header;