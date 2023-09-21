import React from "react";
import "./Home.css"
import NavBar from "./NavBar"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Project1 from "./Projects/Project1"
import Project2 from "./Projects/Project2"
import Project3 from "./Projects/Project3"
import Project4 from "./Projects/Project4"

const Home = () => {

    return(
        <div className="Home_Main">
            <div className="Home_NavBar">
                <NavBar/>
            </div>
            <div className="Home_Content">
                <About/>
                <Skills/>
                <Project1/>
                <Project2/>
                <Project3/>
                <Project4/>
                <Contact/>
            </div>
        </div>
    )
};

export default Home;