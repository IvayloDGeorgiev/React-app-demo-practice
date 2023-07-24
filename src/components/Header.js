import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="Home" className="header-wraper">
            <div className="main-info">
                <h1>Showcase of Projects and Abilities</h1>
                <Typed
                className="typed-text"
                strings={[ "get in touch " , "if you like what you see"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                    
                <Link smooth={true} to="contact" className="btn-main-offer">contact me</Link>
                
            </div>
        </div>
    )
}

export default Header
