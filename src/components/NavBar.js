import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";
//***Font Awesome***/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transperant fixed-top">
        <div className="container">   
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon  icon={faBars} style={{ color: "#fff" }}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item active">
              <Link smooth={true} to="Home" className="nav-link" href="#">Home </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="AboutMe" className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Certificates" className="nav-link" href="#">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Projects" className="nav-link" href="#">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link" href="#">contact</Link>
            </li>
           </ul>
        </div>
    </div> 
      </nav>
    )
}

export default NavBar
