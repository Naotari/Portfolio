import React, { useState, useEffect } from "react";
import "./Project1.css"
import {useSelector } from "react-redux";

const Project1 = () => {

    const Language = useSelector((state) => state.Language);
    const [project1Content, SetProject1Content] = useState("")

    const en = (
        <div className="Project1_Content">
            <h1>DriveIn</h1>
            <div className="Project1_Box">
                <a href="https://drivein.vercel.app/" className="Project1_Image_box">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674577847/Portfolio/Projects/DriveIn.png" alt="DriveIn" className="Project1_Image"></img>
                    <p className="Project1_Image_Text">Enter website</p>
                </a>
                <div className="Project1_information">
                    <a className="Project1_GitHub_Box" href="https://github.com/Naotari/DriveIn">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project1_Github_Logo"></img>
                    <h1 className="Project1_Github_Title">github</h1>
                    </a>
                    <p>
                        A concessionary located in the most visited tourist cities in Latin America where 
                        you can rent the vehicle you like from our catalog. <br></br>
                        This website was created as a group in a period of 4 weeks, with a sprint each week.
                    </p>
                </div>
            </div>
        </div>
    )
    const es = (
        <div className="Project1_Content">
            <h1>DriveIn</h1>
            <div className="Project1_Box">
                <a href="https://drivein.vercel.app/" className="Project1_Image_box">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674577847/Portfolio/Projects/DriveIn.png" alt="DriveIn" className="Project1_Image"></img>
                    <p className="Project1_Image_Text">Etrar al sitio</p>
                </a>
                <div className="Project1_information">
                    <a className="Project1_GitHub_Box" href="https://github.com/Naotari/DriveIn">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project1_Github_Logo"></img>
                    <h1 className="Project1_Github_Title">github</h1>
                    </a>
                    <p>
                        Una concesionaria localizada en las ciudades turisticas mas visitadas de latinoamerica donde 
                        tu puedes rentar el vehiculo que mas te guste de nuetro catalogo <br></br>
                        Este sitio web fue creado como grupo en un periodo de 4 semanas, con sprints cada semana.
                    </p>
                </div>
            </div>
        </div>
    )

    useEffect(() => {
        if (Language === "en") {
            SetProject1Content(en)
        } else {
            SetProject1Content(es)
        }
    }, [Language])

    return(
        <div className="Project1_Main" id="Project1">
            {project1Content}
        </div>
    )
};

export default Project1;