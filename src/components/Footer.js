import React from "react";
import {Link} from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Home Office City of London</p>
            </div>
            <div className="d-flex">
            <p>Mobile: <a href="tel:+447463319362">+447463319362</a></p>
            </div>
            <div className="d-flex">
              <p>Email: ivogeorgiev@hotmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
              <Link smooth={true} to="Home" className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="AboutMe" className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to="Certificates" className="footer-nav">Certificates</Link>
              </div>
              <div className="col">
              <Link smooth={true} to="Projects" className="footer-nav">Projects</Link>
                <br />
                <Link smooth={true} to="contact" className="footer-nav">Contact Me</Link>
              </div>
            </div>
          </div>
                             

            
          </div>
        </div>
                        <div className="socialIcons-wrapper">
             <div className= "socialicons px-5">
                 <div className="Facebook-icon">
                  
                   <a  href="https://www.facebook.com/ivaylo.georgiev.75685/"> <FacebookIcon className="mx-3" size={36}/></a>
                 
                   
                 </div>
                 <div className="linkedin-icon">
                  
                  <a  href="https://www.linkedin.com/feed/"> <LinkedinIcon className="mx-3" size={36}/></a>
                
                  
                </div>
             </div>
                        </div>
                        <br></br>
                        <br></br>
                        
                        <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Ivo-Georgiev | All Rights Reserved
            </p> 
      </div>
    
  )
}

export default Footer;
