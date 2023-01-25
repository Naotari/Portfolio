import React from "react";
import "./Skills.css"

const Skills = () => {

    return(
        <div className="Skills_Main" id="Skills">
            <div className="Skills_Content">
                <h1>My skills</h1>
                <div className="Skills_Box">
                    <div className="Skills_Tech_Box">
                        <h3>Tech Skills</h3>
                        <div>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/JavaScript.png" alt="javascript" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/Node.js.png" alt="node" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/React.js.png" alt="react" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/Redux.js.png" alt="redux" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575055/Portfolio/Tecnologies/Cloudinary.png" alt="cloudinary" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/Sequelize.png" alt="sequelize" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/CSS.png" alt="css" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/PostgreSQL.png" alt="postgresql" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/HTML5.png" alt="html" className="Skill_Tech_Logos"></img>
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674575054/Portfolio/Tecnologies/npm.png" alt="npm" className="Skill_Tech_Logos"></img>
                        </div>
                    </div>
                    <div className="Skill_Soft_Box">
                        <h3>Soft Skills</h3>
                        <div className="Skill_Soft_Box_List">
                            <p>Teamwork</p>
                            <p>Cooperation</p>
                            <p>initiative</p>
                            <p>Resilence</p>
                            <p>Self-confidence</p>
                            <p>Persuasion</p>
                            <p>Versatility</p>
                            <p>Curiosity</p>
                            <p>Adaptability</p>
                            <p>Problem analysis</p>
                            <p>Autodidact</p>
                            <p>Autonomy</p>
                            <p>Critical capacity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;