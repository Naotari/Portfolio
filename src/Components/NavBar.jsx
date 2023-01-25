import React from "react";
import "./NavBar.css";

const NavBar = () => {

    return(
        <div className="NavBar_Main">
            <div>
                <button>English</button>
                <button>Español</button>
            </div>
            <div className="NavBar_Links_Box">
                <a href="#About" className="NavBar_Button"><p>About Me</p></a>
                <a href="#Skills" className="NavBar_Button"><p>Skills</p></a>
                <a href="#Project1" className="NavBar_Button"><p>Project 1</p></a>
                <a href="#Project2" className="NavBar_Button"><p>Project 2</p></a>
                <a href="#Project3" className="NavBar_Button"><p>Project 3</p></a>
                <a href="#Contact" className="NavBar_Button"><p>Contact</p></a>
            </div>
        </div>
    )
};

export default NavBar;