import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"/>
      <div className="nav-header">
        <div className="nav-title">
        <Link style={{color: "white", padding: "80px", textDecoration: "none" }} to={"/"}>Limonest</Link>
        </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links" style={{ paddingTop: "60px" }}>
        <a target="_blank"><Link style={{color: "white", textDecoration: "none" }} to={"/Nous"}>"Qui sommes nous"</Link></a>
        <a target="_blank"><Link style={{color: "white", textDecoration: "none" }} to={"/Gallery"}>Gallery</Link></a>
        <a target="_blank"><Link style={{color: "white", textDecoration: "none" }} to={"/Reservation"}>Réservation</Link></a>
       <button className="button_contact">
        <a target="_blank"><Link style={{color: "white", textDecoration: "none" }} to={"/Contact"}>Contactez-Nous</Link></a>
       </button> 
      </div> 
    </div>
  );
}

export default NavBar;
