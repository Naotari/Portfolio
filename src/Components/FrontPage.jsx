import React from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";

const FrontPage = () => {

    return(
        <div className="FrontPage_Main">
            <div className="FrontPage_First_Box">
                <p className="FrontPage_Text">Hi! My name is </p>
                <p className="FrontPage_Text">Frandel Rodriguez (Naotari)</p>
                <p className="FrontPage_Text">I'm a <em className="Frontpage_Sigle_Word">Full stack</em></p>
                <p className="FrontPage_Text"><em className="Frontpage_Sigle_Word">Developer</em></p>
            </div>
            <div className="FrontPage_Second_Box">
                <Link to="/home" className="FrontPage_Button"><h3>View Portfolio</h3></Link>
            </div>
        </div>
    )
};

export default FrontPage;