import React from "react";
import "./Project2.css"

const Project2 = () => {

    return(
        <div className="Project2_Main" id="Project2">
            <div className="Project2_Content">
                <h1>Dog Breeds</h1>
                <div className="Project2_Box">
                    <a href="https://dog-breeds-naotari.vercel.app/" className="Project2_Image_box">
                        <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674578526/Portfolio/Projects/DogBreeds.png" alt="Dog_Breed" className="Project2_Image"></img>
                        <p className="Project2_Image_Text">Enter website</p>
                    </a>
                    <div className="Project2_information">
                        <a className="Project2_GitHub_Box" href="https://github.com/Naotari/Dog-Breeds">
                        <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Project2_Github_Logo"></img>
                        <h1 className="Project2_Github_Title">github</h1>
                        </a>
                        <p>
                            A catalog of dog breeds where you can find all breeds existence, 
                            also you can add your dog to the collection. <br/>
                            This was my first web created.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project2;