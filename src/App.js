import React from 'react'
import "./App.css";
import Header from './Components/Header/Header'
import TopContainer from './Components/TopContainer/TopContainer'
import SkillContainer from './Components/SkillContainer/SkillContainer';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer';
import Contact from './Components/Contact/Contact';

const App = () => {
     return (
          <div>
               <Header />
                <TopContainer/>
                <SkillContainer/>
                <ProjectContainer/>
                <ExperienceContainer/>
                <Contact/>
          </div>
     )
}

export default App
