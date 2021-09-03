import React from 'react'
import { Element } from 'react-scroll';
import Experience from './../ExperienceBox/Experience';
import "./ExperienceContainer.css";
import linkedinimg from "../../../src/Assests/linkedin 1.png";
import github from "../../../src/Assests/github.png";


const ExperienceContainer = () => {
    return (
        <Element className="experience_container" id="exp">
          <h1>Experience & Profile Links</h1> 
          <div className="experience_container_info">
              <Experience  title="MERN STACK" />
              <Experience number="+30" title="Projects" style={{backgroundColor:"#f64c08"}}/>
              <a href={"//www.linkedin.com/in/prasanna-kumar-pk2000"} target="_blank" >
              <img src={linkedinimg} /> <p>LinkedIn</p> </a>
              <a href={"//https://github.com/prsnaoffl?tab=repositories"} target="_blank" >
              <img src={github} /> <p>Github</p> </a>
          </div>
        </Element>
    )
}

export default ExperienceContainer
