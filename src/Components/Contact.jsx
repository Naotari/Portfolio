import React from "react";
import "./Contact.css"

const Contact = () => {

    return(
        <div className="Contact_Main" id="Contact">
            <div className="Contact_Content">
                <h1>Contact</h1>
                <div className="Contact_Box">
                    <div className="Contact_Social">
                        <h3>Social Network</h3>
                        <a href="https://www.linkedin.com/in/frandel-rodriguez/" className="Contact_Social_Box">
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674592781/Portfolio/LinkedIn.png" alt="linkedin" className="Contact_Social_Box_Icon"></img>
                            <p>LinkedIn</p>
                        </a>
                        <a href="https://github.com/Naotari" className="Contact_Social_Box">
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674581324/Portfolio/GitHub%20Logo.png" alt="github" className="Contact_Social_Box_Icon"></img>
                            <p>GitHub</p>
                        </a>
                        <a href="https://twitter.com/NAOTARI_" className="Contact_Social_Box">
                            <img src="https://res.cloudinary.com/dyiymsxec/image/upload/v1674592781/Portfolio/Twitter.png" alt="twitter" className="Contact_Social_Box_Icon"></img>
                            <p>Twitter</p>
                        </a>
                    </div>
                    <div className="Contact_Direct_Email">
                        <h3>Contact me</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;