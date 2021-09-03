import React from 'react';
import "./TopContent.css";
import { Link } from 'react-scroll';
import myimg from ".././././../Assests/myimg.jpeg";

const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent_container">
                <img className="myimg" src={myimg} alt="myImage" />
                <h1>Mr.Prasanna Kumar</h1>
                <p>A Professional Web App Developer</p>
         <a href="https://drive.google.com/file/d/1XXHnf83XnbnENrnAHvNcxpTLMEP6SIbo/view?usp=sharing">
            <button className="topContent_downloadButton">Download CV</button>
        </a>
        <Link to="projects" smooth="true" duration={500}>
            <button className="topContent_workButton">My Work</button>
        </Link>
            </div>
        </div>
    )
}

export default TopContent
