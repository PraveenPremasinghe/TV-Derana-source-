

import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import "./Header_2.css";
import tv_derana_logo from './tv_derana_logo.png'; 
import SearchBar from "../SearchBar/SearchBar";



function Header_2(){

    return(

      <div>
      <header>
        <div className="logo">
          <img src={tv_derana_logo}/>
        </div>

        


        <table className="logo2" >
        <tr>
            <td>
            
          <SearchBar/>

        
            </td>
            <td>
          <img src={tv_derana_logo}/>

            </td>
           
        </tr>
    </table>



    
        
        <div className="menu" id="myTopnav">
          <ul>
            <a href="javascript:void(0);" style={{fontSize: '15px'}} className="icon" onclick="openNav()">☰</a>
           <Link to="/Live"><li className="livebtn">Live</li></Link>
           <Link to="/"><li>Categories</li></Link>
           <Link to="/"><li>Gallery</li></Link>
           <Link to="/"><li>About us</li></Link>
           <Link to="/"><li>App</li></Link>
           
          </ul>

     

        </div>

        

      </header>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
        <Link to="/programmers"><li>Live</li></Link>
           <Link to="/"><li>Categories</li></Link>
           <Link to="/"><li>Gallery</li></Link>
           <Link to="/"><li>About us</li></Link>
           <Link to="/"><li>App</li></Link>
      </div>

    
 
    </div>

   

           
    );
}

export default Header_2;