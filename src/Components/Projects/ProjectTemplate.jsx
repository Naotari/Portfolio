import "./ProjectTemplate.css"
import {useSelector } from "react-redux";

const ProjectTemplate = (props) => {

    const content = props.Project
    const Language = useSelector((state) => state.Language);

    return(
        <div className="ProjectTemplate_Main" id={content.id}>
            <div className="ProjectTemplate_Content">
                <h1>{Language === "es"? content.nombre: content.name}</h1>
                <div className="ProjectTemplate_Box">
                    <a href={content.link} className="Project1_Image_box">
                        <img src={content.imagen} alt={content.name} className="ProjectTemplate_Image"></img>
                        <p className="ProjectTemplate_Image_Text">{Language === "es"?"Entrar al sitio": "Enter website"}</p>
                    </a>
                    <div className="ProjectTemplate_information">
                        <a className="ProjectTemplate_GitHub_Box" href={content.githubLink}>
                        <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="ProjectTemplate_Github_Logo"></img>
                        <h1 className="ProjectTemplate_Github_Title">github</h1>
                        </a>
                        <p>{Language === "es"? content.contenido: content.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectTemplate;