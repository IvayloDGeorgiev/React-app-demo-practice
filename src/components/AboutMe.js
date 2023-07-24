import React from "react";
import author from "../me.jpg"

const AboutMe = () => {
    return (
        <div className="aboutme-box">
        <div id="AboutMe" className="container py-5">
            <div className="row px-0">
             <div className= "col-lg-6 col-xm-12">
                 <div className="photo-wrap mb-5" >
                     <img className="profile-img" src={author} alt="Author..."/>
                 </div>
                 
                </div>    
             <div className= "col-lg-6 col-xm-12">
                 <h1 className="about-heading">About Me</h1>
                 <p>
                 Hello, my name is Ivaylo Georgiev or just "Ivo".

                        I have been learning Web development for the last year, just finish the Front-End engineer course, which includes HTML, CSS, JavaScript, React.js, Algorithms, Data structure. In my own time, I've learned Git and GitHub, using Bootstrap and sanity to help me with the back-end.
                        I am currently studying Back-End Development and social media ads and planning to become a full stack developer. I am punctual and dedicated to learn and improve in all aspects of my life, always positive and ready for new challenges.

                        I've learned to approach each project individually and always focus on the result

                        And I'm ready to learn more about building websites, design and components for websites.
                        I am a hands-on learner with a strong can-do attitude and am not afraid to get my hands dirty.
                 </p>
                 </div>  
            </div>
        </div>
        </div>
    )
}

export default AboutMe
