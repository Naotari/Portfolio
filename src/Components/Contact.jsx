import React, { useState, useEffect } from "react";
import "./Contact.css"
import {useSelector } from "react-redux";

const Contact = () => {

    const Language = useSelector((state) => state.Language);
    const [ contactContent, SetContactContent] = useState("")

    const en = (
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
                <form action="https://formspree.io/f/mgebornn" method="POST" className="Contact_Direct_Email_Form">
                    <label className="Contact_Direct_Email_Form_Email">
                        Your email:
                        <input type="email" name="email" className="Contact_Direct_Email_Form_Email_Box"/>
                    </label>
                    <label className="Contact_Direct_Email_Form_Message">
                        Your message:
                        <textarea name="message"  className="Contact_Direct_Email_Form_Message_Box"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
    )
    const es = (
        <div className="Contact_Content">
        <h1>Contacto</h1>
        <div className="Contact_Box">
            <div className="Contact_Social">
                <h3>Redes sociales</h3>
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
                <h3>Contactame</h3>
                <form action="https://formspree.io/f/mgebornn" method="POST" className="Contact_Direct_Email_Form">
                    <label className="Contact_Direct_Email_Form_Email">
                        Tu email:
                        <input type="email" name="email" className="Contact_Direct_Email_Form_Email_Box"/>
                    </label>
                    <label className="Contact_Direct_Email_Form_Message">
                        Tu mensaje:
                        <textarea name="message"  className="Contact_Direct_Email_Form_Message_Box"></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </div>
    )


    useEffect(() => {
        if (Language === "en") {
            SetContactContent(en)
        } else {
            SetContactContent(es)
        }
    }, [Language])

    return(
        <div className="Contact_Main" id="Contact">
            {contactContent}
        </div>
    )
};

export default Contact;