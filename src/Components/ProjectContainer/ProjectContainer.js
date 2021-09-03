import React from 'react';
import "./ProjectContainer.css"; 
import youtube from "../../../src/Assests/youtube.png";
import linkedin from "../../../src/Assests/linkedin.png";
import facebook from "../../../src/Assests/facebook.png";
import amazon from "../../../src/Assests/amazon.png";
import tindog from "../../../src/Assests/tindog.png";
import magazine from "../../../src/Assests/magazine.png";
import { Element } from 'react-scroll';
import Project from '../Project/Project';

const ProjectContainer = () => {
    const projects=[
        {
            img:amazon,
            title:"Amazon",
            desc:"Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available* Choose from a vast selection of the best quality products.",
            link:"https://amazon-clone-link.netlify.app/"
        },
        {
            img:facebook,
            title:"Facebook",
            desc:"Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available* Choose from a vast selection of the best quality products.",
            link:"https://facebook-site.netlify.app/"
        },
        {
            img:youtube,
            title:"Youtube",
            desc:"Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
            link:"https://youtube-clone-react-link.netlify.app/"
        },
        {
            img:linkedin,
            title:"LinkedIn",
            desc:" Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities.",
            link:"https://linked-clone-site.netlify.app/"
        },
        {
            img:tindog,
            title:"Tindog",
            desc:"I no longer have to sniff other dogs for love. Ive found the hottest Corgi on TinDog. Woof!,dog-profile Pebbles,",
            link:"https://tindog-clone-site.netlify.app/"
        },
        {
            img:magazine,
            title:"NewYork Times Magazine",
            desc:"The New York Times Magazine is a Sunday magazine supplement included with the Sunday edition of The New York Times. ",
            link:"https://newyorktimes-magazine-site.netlify.app/"
        },
    ]
    return (
        <Element className="projectContainer" id="projects">
            <h1>Projets</h1>
            <p>
                Here are some projects which I done for making lives pf people easy
            </p>
            <div className="projectContainer_projects">
             {
                 projects.map((project,index)=>{
                     return(
                         <Project 
                           key={index}
                           img={project.img}
                           title={project.title}
                           desc={project.desc}
                           link={project.link}  />
                     )
                 })
             }
            </div>
        </Element>
    )
}

export default ProjectContainer
