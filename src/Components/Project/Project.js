import React, { useState } from 'react';
import "./Project.css"

const Project = ({img,desc,link,title}) => {
    const [show, setShow] = useState(false);
    return (
        <a href={link}>
         <div className="project_container">
         <div className="project"
         onMouseEnter={()=>setShow(true)}
         onMouseLeave={()=>setShow(false)}
         >
        {show? (
            
            <div className="project_content">
               <h4>{title}</h4>
               <p>{desc}</p>
            </div>
        ):(
            <img src={img} alt="" />
        )}
         </div>
         </div>
        </a>
    )
}

export default Project;
