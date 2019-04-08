import React,{Component} from 'react'

import Transition from 'react-transition-group/Transition';
import './Navbar.css';
import image from './logo.png';

import {Link} from 'react-router-dom';

 class Navbar extends Component {


  actBtn = ()=>{
    let act = document.querySelector("ul");
    
    if(act.style.display ==="block"){
      act.style.display ="none";
       
    }

    else{
      act.style.display = "block";
    }


  }

 render(){

   return (
     <nav>
       <div className="logoBtn">
         <Link to='/' className="logo"><img to="/" src={image} alt='' /></Link>

         <div className="btn" onClick={this.actBtn}>
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
         </div>
       </div>

       
         

       <ul className="menuBtn">
         <li><Link to="/" onClick={this.actBtn}>home</Link></li>
         <li><Link to="/about" onClick={this.actBtn}>about</Link></li>
         <li><Link to="/projects" onClick={this.actBtn}>projects</Link></li>
         <li><Link to="/contacts" onClick={this.actBtn}>contact</Link></li>
       </ul>
      
     </nav>
     
   )


 }



}

export default Navbar;