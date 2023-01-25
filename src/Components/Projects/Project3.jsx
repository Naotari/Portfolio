import React from "react";
import "./Project3.css"

const Project3 = () => {

    return(
        <div className="Project3_Main" id="Project3">
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
                        <p>This is the web i desiged to show all information about me and the proyects I made.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project3;