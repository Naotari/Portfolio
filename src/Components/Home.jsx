import React from "react";
import "./Home.css"
import NavBar from "./NavBar"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import ProjectTemplate from "./Projects/ProjectTemplate";
import allProjects from "./Projects/AllProjects"

const Home = () => {

    return(
        <div className="Home_Main">
            <div className="Home_NavBar">
                <NavBar/>
            </div>
            <div className="Home_Content">
                <About/>
                <Skills/>
                <ProjectTemplate Project={allProjects.project1}/>
                <ProjectTemplate Project={allProjects.project2}/>
                <ProjectTemplate Project={allProjects.project3}/>
                <ProjectTemplate Project={allProjects.project4}/>
                <Contact/>
            </div>
        </div>
    )
};

export default Home;