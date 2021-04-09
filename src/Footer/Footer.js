import React from 'react';
import {IconContext} from "react-icons";
import {FaSpotify, FaInstagram, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import { GoRepo } from "react-icons/go";

const Footer = () => {
    return (
        <IconContext.Provider value={{size: "1.8em", color: "white", style: {margin: "0px 8px"}}}>
            <footer className="page-footer black" style={{zIndex: "1000"}}>
                <div className="container">
                    <div className="row">
                        <div className="col l4 offset-l4 s12 center">
                            <a href={"https://www.github.com/MightyPhoenix"}><FaGithub/></a>
                            <a href={"https://www.instagram.com/hsebinga"}><FaInstagram/></a>
                            <a href={"https://open.spotify.com/user/31vhl5d4sdpth7xim4fbyypclmdi"}><FaSpotify/></a>
                            <a href={"https://www.linkedin.com/in/mightyphoenix7/"}><FaLinkedinIn/></a>
                            <a href={"https://github.com/MightyPhoenix/agnibesh.dev"}><GoRepo/></a>
                            <a href={"https://twitter.com/hsebinga"}><FaTwitter/></a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center font-neucha">
                        Made with ❤ by Agnibesh © 2020
                    </div>
                </div>
            </footer>
        </IconContext.Provider>
    );
};

export default Footer;
