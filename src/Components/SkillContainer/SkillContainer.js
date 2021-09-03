import React from 'react';
import { Element } from 'react-scroll';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./SkillContainer.css";

const SkillContainer = () => {
    return (
        <Element className="skillContainer" id="skills">
            <div className="skillContainer_image">
                <img 
                 src="https://images.wallpaperscraft.com/image/laptop_programming_code_205768_1280x720.jpg"
                alt="skillimage" />
             </div>

            <div className="skillContainer_text">
              <h3>SkillS</h3>
            <div className="skillContainer_skillSet">
                <h5>React</h5>
            <div className="skillContainer_slider skillContainer_slider1">
               <LinearProgress variant="determinate" value={90} /> 
            </div>
            </div>

            <div className="skillContainer_skillSet">
                <h5>NodeJs</h5>
            <div className="skillContainer_slider skillContainer_slider2">
               <LinearProgress variant="determinate" value={70} /> 
            </div>
            </div>

            <div className="skillContainer_skillSet">
                <h5>MangoDB</h5>
            <div className="skillContainer_slider skillContainer_slider3">
               <LinearProgress variant="determinate" value={65} /> 
            </div>
            </div>

            <div className="skillContainer_skillSet">
                <h5>ExpressJS</h5>
            <div className="skillContainer_slider skillContainer_slider4">
               <LinearProgress variant="determinate" value={70} /> 
            </div>
            </div>

            <div className="skillContainer_skillSet">
                <h5>JavaScript</h5>
            <div className="skillContainer_slider skillContainer_slider5">
               <LinearProgress variant="determinate" value={75} /> 
            </div>
            </div>

            <div className="skillContainer_skillSet">
                <h5>AWS</h5>
            <div className="skillContainer_slider skillContainer_slider6">
               <LinearProgress variant="determinate" value={50} /> 
            </div>
            </div>
 

            </div>
        </Element>
    )
}

export default SkillContainer
