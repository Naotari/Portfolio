import React, { useState, useEffect } from "react";
import "./Project3.css"
import {useSelector } from "react-redux";

const Project3 = () => {

    const Language = useSelector((state) => state.Language);
    const [project3Content, SetProject3Content] = useState("")

    const en = (
        <div className="Project3_Content">
        <h1>My Portfolio</h1>
        <div className="Project3_Box">
            <a href="https://drivein.vercel.app/" className="Project3_Image_box">
                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674591580/Portfolio/Projects/Portfolio.png" alt="portfolio" className="Project3_Image"></img>
                <p className="Project3_Image_Text">Enter website</p>
            </a>
            <div className="Project3_information">
                <a className="Project3_GitHub_Box" href="https://github.com/Naotari/DriveIn">
                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project1_Github_Logo"></img>
                <h1 className="Project3_Github_Title">github</h1>
                </a>
                <p>This is the web I desiged to show all information about me and the projects I made.</p>
            </div>
        </div>
    </div>
    )
    const es = (
        <div className="Project3_Content">
            <h1>Mi portafolio</h1>
            <div className="Project3_Box">
                <a href="https://drivein.vercel.app/" className="Project3_Image_box">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674591580/Portfolio/Projects/Portfolio.png" alt="portfolio" className="Project3_Image"></img>
                    <p className="Project3_Image_Text">Entrar al sitio</p>
                </a>
                <div className="Project3_information">
                    <a className="Project3_GitHub_Box" href="https://github.com/Naotari/DriveIn">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project1_Github_Logo"></img>
                    <h1 className="Project3_Github_Title">github</h1>
                    </a>
                    <p>Esta es la pagina que diseñe para mostrar toda la informacion acerca de mi y los proyectos que he hecho. </p>
                </div>
            </div>
        </div>
    )

    useEffect(() => {
        if (Language === "en") {
            SetProject3Content(en)
        } else {
            SetProject3Content(es)
        }
    }, [Language])

    return(
        <div className="Project3_Main" id="Project3">
            {project3Content}
        </div>
    )
};

export default Project3;