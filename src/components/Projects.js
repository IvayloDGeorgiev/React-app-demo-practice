import React from "react";
import FirstProject from "../First-Project.png";
import SecondProject from "../SecondProject.png";

const Projects = () => {
    return (
        <div id="Projects" className="projects-wrapper ">
            <div className="container">
                <div className="projects-name">
                <h1 className ="text-center ">Projects</h1>
                </div>
                    <div className="projects-image-box py-5">
                <div className="prorow "> 

                        <p>My First Project </p>
                        <p>HTML,CSS and JavaScript</p>

                    
                        <a  href="https://ivo-georgiev.netlify.app/"><img className ="projects-image" src={FirstProject} alt="Image of my first website" />
                        </a>
                      
                    </div>
                        {/**/}
                     <div className="prorow "> 

                             <p>Home Improvements</p>
                             <p>React.js ,CSS, Bootstrap</p>

                            <a  href="https://picassopaintinganddecorating.online/"><img className ="projects-image" src= {SecondProject} alt="Image of my first website" />
                            </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
