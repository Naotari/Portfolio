import React, { useState, useEffect }  from "react";
import "./Skills.css"
import {useSelector } from "react-redux";

const Skills = () => {

    const Language = useSelector((state) => state.Language);
    const [skillsContent, SetSkillsContent] = useState("")

    const en = (
            <div className="Skills_Content">
                <h1>My skills</h1>
                <div className="Skills_Box">
                    <div className="Skills_Tech_Box">
                        <h3>Tech Skills</h3>
                        <div className="Skills_Tech_Box_Group">
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">HTML</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">CSS</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">JavaScript</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">Node</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">React</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">Redux</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/Cloudinary.png" alt="cloudinary" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">Cloudinary</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="sequelize" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">Sequelize</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">PostgreSQL</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" className="Skill_Tech_Logos"/>
                                <p className="Skills_Tech_Box_frame_Text">npm</p>
                            </div>
                        </div>
                    </div>
                    <div className="Skill_Soft_Box">
                        <h3>Soft Skills</h3>
                        <div className="Skill_Soft_Box_List">
                            <p className="Skill_Soft_Box_List_Text">Teamwork</p>
                            <p className="Skill_Soft_Box_List_Text">Cooperation</p>
                            <p className="Skill_Soft_Box_List_Text">initiative</p>
                            <p className="Skill_Soft_Box_List_Text">Resilence</p>
                            <p className="Skill_Soft_Box_List_Text">Self-confidence</p>
                            <p className="Skill_Soft_Box_List_Text">Persuasion</p>
                            <p className="Skill_Soft_Box_List_Text">Versatility</p>
                            <p className="Skill_Soft_Box_List_Text">Curiosity</p>
                            <p className="Skill_Soft_Box_List_Text">Adaptability</p>
                            <p className="Skill_Soft_Box_List_Text">Problem analysis</p>
                            <p className="Skill_Soft_Box_List_Text">Autodidact</p>
                            <p className="Skill_Soft_Box_List_Text">Autonomy</p>
                            <p className="Skill_Soft_Box_List_Text">Critical capacity</p>
                        </div>
                    </div>
                </div>
            </div>
    )
    
    const es = (
            <div className="Skills_Content">
                <h1>Mis habilidades</h1>
                <div className="Skills_Box">
                    <div className="Skills_Tech_Box">
                        <h3>Habilidades tecnicas</h3>
                        <div className="Skills_Tech_Box_Group">
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/HTML5.png" alt="html" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">HTML</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/CSS.png" alt="css" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">CSS</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/JavaScript.png" alt="javascript" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">JavaScript</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/Node.js.png" alt="node" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">Node</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/React.js.png" alt="react" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">React</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/Redux.js.png" alt="redux" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">Redux</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/Cloudinary.png" alt="cloudinary" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">Cloudinary</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/Sequelize.png" alt="sequelize" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">Sequelize</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/PostgreSQL.png" alt="postgresql" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">PostgreSQL</p>
                            </div>
                            <div className="Skills_Tech_Box_frame">
                                <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/npm.png" alt="npm" className="Skill_Tech_Logos"></img>
                                <p className="Skills_Tech_Box_frame_Text">npm</p>
                            </div>
                        </div>
                    </div>
                    <div className="Skill_Soft_Box">
                        <h3>Habilidades blandas</h3>
                        <div className="Skill_Soft_Box_List">
                            <p className="Skill_Soft_Box_List_Text">Trabajo en equipo</p>
                            <p className="Skill_Soft_Box_List_Text">Cooperacion</p>
                            <p className="Skill_Soft_Box_List_Text">Iniciativa</p>
                            <p className="Skill_Soft_Box_List_Text">Recilencia</p>
                            <p className="Skill_Soft_Box_List_Text">Autoconfianza</p>
                            <p className="Skill_Soft_Box_List_Text">Persuacion</p>
                            <p className="Skill_Soft_Box_List_Text">Versatilidad</p>
                            <p className="Skill_Soft_Box_List_Text">Curiosidad</p>
                            <p className="Skill_Soft_Box_List_Text">Adaptabilidad</p>
                            <p className="Skill_Soft_Box_List_Text">Analisis de problemas</p>
                            <p className="Skill_Soft_Box_List_Text">Autodidacta</p>
                            <p className="Skill_Soft_Box_List_Text">Autonomia</p>
                            <p className="Skill_Soft_Box_List_Text">Capacidad Critica</p>
                        </div>
                    </div>
                </div>
            </div>
    )
    
    useEffect(() => {
        if (Language === "en") {
            SetSkillsContent(en)
        } else {
            SetSkillsContent(es)
        }
    }, [Language])
    
    
    return(
        <div className="Skills_Main" id="Skills">
            {skillsContent}
        </div>
    )
};

export default Skills;