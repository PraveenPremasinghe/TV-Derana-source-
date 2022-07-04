

import React from "react";

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
            <li><a href="#">Programmes</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Reality shows</a></li>
            <li><a href="#">TV Derana-Srilanka</a></li>
          </ul>
        </div>
      </header>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
        <li><a href="#">Programmes</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Reality shows</a></li>
        <li><a href="#">TV Derana-Srilanka</a></li>
      </div>

    
 
    </div>

   

           
    );
}

export default Header;