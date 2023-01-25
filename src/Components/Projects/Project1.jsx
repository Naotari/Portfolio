import React from "react";
import "./Project1.css"

const Project1 = () => {

    return(
        <div className="Project1_Main" id="Project1">
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
                            A consencinary located in the most visited tourist cities in Latin America where 
                            you can rent the vehicle you like from our catalog. <br></br>
                            This website was created as a group in a period of 4 weeks, with a sprint each week.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project1;