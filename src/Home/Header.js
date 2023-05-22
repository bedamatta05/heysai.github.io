import React from "react";
import "./Header.css";
import avatar from "./images/avatar.png"

const Header = () => {
    return(
        <div className="header container">
            <div className="avatar-bg"></div>
            <div className="header-avatar"><img src={avatar} alt="avatar" /></div>
            <div className="header-text">Full-stack dev, Illustrator & Nerd</div>
            <div className="header-sub-text">I build web-stuffs, watch trillers, manage social media pages and drive in the evenings.</div>
            </div>
    )
}

export default Header;