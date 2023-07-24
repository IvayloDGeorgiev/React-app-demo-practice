import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css";

import FrontEnd from "../Front-End Engineer.jpg";
import HTML from "../HTML Certificate.png";
import CSS from "../CSS Certificate.png";
import JavaScript from "../JavaScript certificate.png";
import ReactCertificate from "../React Certificate.png";


function App(){
        return (
            
            
            <div id="Certificates" className="carousel-background">
                <p className="Certificates-nametag">Certificates</p>
            <div className="wrapper">
            <Carousel className="main-slide">
            
            <div>
                <img src={FrontEnd} />
                
            </div>

            <div>
            <img src={HTML} />
            </div>

            <div>
            <img src={CSS} />
            </div>

            <div>
            <img src={JavaScript} />
            </div>

            <div>
            <img src={ReactCertificate} />
            </div>
        </Carousel>
            </div>
            </div>

            

        
    
            );    
        };


export default App;