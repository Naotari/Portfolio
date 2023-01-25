import React from "react";
import "./About.css"

const About = () => {

    return(
        <div className="About_Main" id="About">
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
        </div>
    )

};

export default About;