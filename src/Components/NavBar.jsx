import React from "react";
import "./NavBar.css";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Redux/actions";

const NavBar = () => {
    const dispatch = useDispatch();
    
    const [menu, setMenu] = useState("");
    const [menuOptions, setMenuOptions] = useState("")
    const [menu1, setMenu1] = useState("")

    const Language = useSelector((state) => state.Language);

    const LanguageChangeHandler  = (event) => {
        if (event.target.value === "en") {
            dispatch(setLanguage("en"))
        }else if (event.target.value === "es") {
            dispatch(setLanguage("es"))
        }
    };

    const menuChangeHandler = () => {
        console.log("Clicked");
        if (Language === "en") {
            setMenuOptions(menu1en)

        } else {
            setMenuOptions(menu1es)
        }
    }

    const menuOptionChangeHandler = () => {
        console.log("clicked Option");
        setMenuOptions("")
    }
    
    const menu1en =(
        <div className="NavBar_Links_Box">
            <a href="#About" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>About Me</p></a>
            <a href="#Skills" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Skills</p></a>
            <a href="#Project1" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 1</p></a>
            <a href="#Project2" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 2</p></a>
            <a href="#Project3" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 3</p></a>
            <a href="#Project4" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Project 4</p></a>
            <a href="#Contact" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Contact</p></a>
        </div>
    );
    const menu1es = (
        <div className="NavBar_Links_Box">
            <a href="#About" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Acerca de Mi</p></a>
            <a href="#Skills" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Habilidades</p></a>
            <a href="#Project1" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Proyecto 1</p></a>
            <a href="#Project2" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Proyecto 2</p></a>
            <a href="#Project3" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Proyecto 3</p></a>
            <a href="#Project4" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Proyecto 4</p></a>
            <a href="#Contact" className="NavBar_Button" onClick={menuOptionChangeHandler}><p>Contacto</p></a>
        </div>
    );

    const menu2 = (
        <img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="menu" className="NavBar_Links_Box_Icon" onClick={menuChangeHandler}></img>
    );

    const reSizeWindowsFunction = () => {
        console.log(window.innerWidth)
        if (window.innerWidth > 1345) {
            console.log("set menu 1");
            setMenu(menu1)
        } else {
            console.log("set menu 2");
            setMenu(menu2)
        }
    };
    window.onresize = reSizeWindowsFunction;
    useEffect(() => {
        setMenu1("")
        if(Language === "en") {
            setMenu1(menu1en)
            if (window.innerWidth > 1345) {
                setMenu(menu1en)
            } else {
                setMenu(menu2)
            }
        } else {
            setMenu1(menu1es)
            if (window.innerWidth > 1345) {
                setMenu(menu1es)
            } else {
                setMenu(menu2)
            }
        }
        console.log("cargo esto");
    },[Language,])

    window.onresize = reSizeWindowsFunction;
    useEffect(() => {
        setMenu1(menu1en)
        if (window.innerWidth > 1345) {
            setMenu(menu1en)
        } else {
            setMenu(menu2)
        }
        console.log("hubo un cambio");
    },[])

    return(
        <div className="NavBar_Main">
            <div>
                <button className="NavBar_Language_Button" onClick={LanguageChangeHandler} value="en">English</button>
                <button className="NavBar_Language_Button" onClick={LanguageChangeHandler} value="es">Español</button>
            </div>
            {menu}
            {menuOptions}
        </div>
    )
};

export default NavBar;