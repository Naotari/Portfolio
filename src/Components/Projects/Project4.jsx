import React, { useState, useEffect } from "react";
import "./Project4.css"
import {useSelector } from "react-redux";

const Project4 = () => {

    const Language = useSelector((state) => state.Language);
    const [project4Content, SetProject4Content] = useState("")

    const en = (
        <div className="Project4_Content">
        <h1>Calculator</h1>
        <div className="Project4_Box">
            <a href="https://calculator-naotari.vercel.app/" className="Project4_Image_box">
                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1695327335/Portfolio/Projects/Calculator.png" alt="calculator" className="Project4_Image"></img>
                <p className="Project4_Image_Text">Enter website</p>
            </a>
            <div className="Project4_information">
                <a className="Project4_GitHub_Box" href="https://github.com/Naotari/calculator">
                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project1_Github_Logo"></img>
                <h1 className="Project4_Github_Title">github</h1>
                </a>
                <p>This is a basic calculator created to practice basic concepts in javascript.</p>
            </div>
        </div>
    </div>
    )
    const es = (
        <div className="Project4_Content">
            <h1>Calculadora</h1>
            <div className="Project4_Box">
                <a href="https://calculator-naotari.vercel.app/" className="Project4_Image_box">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1695327335/Portfolio/Projects/Calculator.png" alt="calculator" className="Project4_Image"></img>
                    <p className="Project4_Image_Text">Entrar al sitio</p>
                </a>
                <div className="Project4_information">
                    <a className="Project4_GitHub_Box" href="https://github.com/Naotari/calculator">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project1_Github_Logo"></img>
                    <h1 className="Project4_Github_Title">github</h1>
                    </a>
                    <p>Esta es una calculadora basica creada para practicar conceptos basicos de javascript. </p>
                </div>
            </div>
        </div>
    )

    useEffect(() => {
        if (Language === "en") {
            SetProject4Content(en)
        } else {
            SetProject4Content(es)
        }
    }, [Language])

    return(
        <div className="Project4_Main" id="Project4">
            {project4Content}
        </div>
    )
};

export default Project4;