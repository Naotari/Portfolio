import React, { useState, useEffect } from "react";
import "./About.css"
import {useSelector } from "react-redux";

const About = () => {

    const Language = useSelector((state) => state.Language);
    const [aboutContent, SetAboutContent] = useState("")


    const en = (
            <div className="About_Content">
                <div className="About_Content_Box_1">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674500716/Portfolio/Frandel_a1bqbs.jpg" alt="perfil" className="About_Photo"></img>
                    <h1 className="About_Tittle">About Me</h1>
                </div>
                <p className="About_First_Paragraph">
                    My name is Frandel Rodriguez, I'm 26, and I'm a Full Stack Developer. <br/>
                    I am a person who is interested in technology and in 2022 I wanted to learn another branch of technology. <br/>
                    I studied in Henry the Full Stack Developer career, it was a +800h course of learning and practice.
                    I learned how to create a full application based on Node.js and React.js, also we learn soft skills like Teamwork and Adaptability. <br/>
                </p>
            </div>
    )
    const es = (
            <div className="About_Content">
                <div className="About_Content_Box_1">
                    <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674500716/Portfolio/Frandel_a1bqbs.jpg" alt="perfil" className="About_Photo"></img>
                    <h1 className="About_Tittle">Sobre mí</h1>
                </div>
                <p className="About_First_Paragraph">
                    Mi nombre es Frandel Rodriguez, tengo 26 años y soy un desarrollador Full Stack. <br/>
                    Soy una persona que esta interesada en tecnologia y en 2022 quise aprender una nueva rama de tecnologia. <br/>
                    Estudie en Henry la carrera de Full Stack Developer, fue un curso de mas de 800 horas de aprendizaje y practica.
                    Aprendi como crear una aplicacion web basada en Node.js y React.js, ademas aprendimos habilidades blandas como trabajo en equipo y adaptabilidad.<br/>
                </p>
            </div>
    )



    useEffect(() => {
        if (Language === "en") {
            SetAboutContent(en)
        } else {
            SetAboutContent(es)
        }
    }, [Language])

    return(
        <div className="About_Main" id="About">
            {aboutContent}
        </div>
    )

};

export default About;