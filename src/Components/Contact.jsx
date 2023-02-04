import React, { useState, useEffect } from "react";
import "./Contact.css"
import {useSelector } from "react-redux";
import swal from "sweetalert";
import axios from "axios";

const Contact = () => {

    const Language = useSelector((state) => state.Language);
    const [ contactContent, SetContactContent] = useState("")
    const [ emailBox, setEmailBox] = useState("")
    const [ emailContentBox, setEmailContentBox] = useState("")


    const emailChangeHandler = (event) => {setEmailBox(event.target.value)};
    const emailContentChangeHandler = (event) => {setEmailContentBox(event.target.value)};
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event);
        //Country
        if(emailBox === "") {
            if (Language === "en") {
                swal({text: "Your email can't be empty"})
            } else swal({text: "Tu correo no puede estar vacío!"});
            return false
        }
        //city
        if(emailContentBox === "") {
            if (Language === "en") {
                swal({text: "Your message can't be empty"})
            } else swal({text: "Tu mensaje no puede estar vacío!"});
            return false
        }

        const emailMessage = {
            email: emailBox,
            message: emailContentBox
        }

        axios.post("https://formspree.io/f/mgebornn", emailMessage)
        .then(function (response) {
            if (Language === "en") {
                swal( "Good!" ,  "Your email was sent and I will check it as soon as possible!" ,  "success" )
            } else swal ( "Bien!" ,  "Tu email fue enviado y lo revisare cuanto antes, gracias!" ,  "success" )

        })
        .catch(function (error) {
            if (Language === "en") {
                swal ( error ,  "Your email cant be sent at this time, please try again later." ,  "error" )
            } else swal ( error ,  "No se pudo enviar tu email, intenta de nuevo mas tarde." ,  "error" )
        });
    }


    const en = [ "Contact", "Social Network", "Contact me", "Your email:", "Your message:", "Send"]
    const es = [ "Contacto", "Redes sociales", "Contactame", "Tu email:", "Tu mensaje:", "Enviar"]


    useEffect(() => {
        if (Language === "en") {
            SetContactContent(en)
        } else {
            SetContactContent(es)
        }
    }, [Language])

    return(
        <div className="Contact_Main" id="Contact">
            <div className="Contact_Content">
                <h1>{contactContent[0]}</h1>
                <div className="Contact_Box">
                    <div className="Contact_Social">
                        <h3>{contactContent[1]}</h3>
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
                        <h3>{contactContent[2]}</h3>
                        <form onSubmit={submitHandler} className="Contact_Direct_Email_Form">
                            <label className="Contact_Direct_Email_Form_Email">
                                {contactContent[3]}
                                <input type="email" name="email" className="Contact_Direct_Email_Form_Email_Box" onChange={emailChangeHandler} value={emailBox}/>
                            </label>
                            <label className="Contact_Direct_Email_Form_Message">
                                {contactContent[4]}
                                <textarea name="message"  className="Contact_Direct_Email_Form_Message_Box" onChange={emailContentChangeHandler} value={emailContentBox}></textarea>
                            </label>
                            <button type="submit" className="Contact_Direct_Email_button">{contactContent[5]}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;