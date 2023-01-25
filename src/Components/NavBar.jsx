import React from "react";
import "./NavBar.css";
import { useState, useEffect} from "react";

const NavBar = () => {
    
    const [menu, SetMenu] = useState("");
    const [menuOptions, setmenuOptions] = useState("")


    const menuChangeHandler = () => {
        console.log("Clicked");
            setmenuOptions(menu1)
    }

    const menuOptionChangeHandler = () => {
        console.log("clicked Option");
        setmenuOptions("")
    }
    
    const menu1 = (
        <div className="NavBar_Links_Box">
            <a href="#About" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>About Me</p></a>
            <a href="#Skills" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Skills</p></a>
            <a href="#Project1" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 1</p></a>
            <a href="#Project2" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 2</p></a>
            <a href="#Project3" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 3</p></a>
            <a href="#Contact" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Contact</p></a>
        </div>
    );
    
    const menu2 = (
        <img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="menu" className="NavBar_Links_Box_Icon" onClick={menuChangeHandler}></img>
    );

    const reSizeWindowsFunction = () => {
        console.log(window.innerWidth)
        if (window.innerWidth > 1345) {
            SetMenu(menu1)
        } else {
            SetMenu(menu2)
        }
    };
    window.onresize = reSizeWindowsFunction;
    
    
useEffect(() => {
    reSizeWindowsFunction()
}, [])

    return(
        <div className="NavBar_Main">
            <div>
                <button>English</button>
                <button>Español</button>
            </div>
            {menu}
            {menuOptions}
        </div>
    )
};

export default NavBar;