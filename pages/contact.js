import React, {useEffect} from 'react';
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import {Params, paramsrainbow} from "../src/ParticleParams";
import {IconContext} from 'react-icons';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';

import Particles from "react-particles-js";
import HEAD from "../src/HEAD/HEAD";

if (typeof window !== 'undefined'){
    require('materialize-css');
}

const Contact = () => {
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/contact"},{name:"404", link: "/404"}];

    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    },[]);
    return (
        <div className="body">
            <HEAD/>
            {/*HEAD END*/}
            <Navbar NavItems={Nav}/>
            {/*NAV END*/}
            <main className="container center valign-wrapper" style={{zIndex:"1000"}}>
                <div className={"section row"}>

                    <div className={"col s12 m4"} style={{marginBottom:"10px",marginTop:"10px"}}>
                        <div className={"white"} style={{magin:"0px",padding:"10px", borderRadius:"8px",backgroundImage: "linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)"}}>
                        <h4 className={"font-neucha white-text"}>Basically my digital footprint</h4>
                            <IconContext.Provider  value={{size:"0.5rem",color:"white",}}>
                            <ul className="collection white-text font-neucha left-align flow-text" style={{border:"0px solid white",background:"rgba(0,0,0,0)"}}>

                                <li className="collection-item avatar" style={{border:"0px solid white",background:"rgba(0,0,0,0)"}}>
                                    <BsFillEnvelopeFill className={"circle"} style={{borderRadius:"0"}}/>
                                    <p className={"flow-text"} style={{marginTop:"4%"}}><a href={"mailto:agnibesh00mukherjee@gmail.com"} className={"white-text"}>Email me Old-School</a></p>
                                </li>

                                <li className="collection-item avatar" style={{border:"0px solid white",background:"rgba(0,0,0,0)"}}>
                                    <FaLinkedin className={"circle"} style={{borderRadius:"0"}}/>
                                    <p style={{marginTop:"4%"}}><a className={"white-text"} href={"https://www.linkedin.com/in/mightyphoenix7/"}>Industry norm</a></p>
                                </li>

                                <li className="collection-item avatar" style={{border:"0px solid white",background:"rgba(0,0,0,0)"}}>
                                    <FaGithub className={"circle"} style={{borderRadius:"0"}}/>
                                    <p style={{marginTop:"4%"}}><a className={"white-text"} href={"https://www.github.com/MightyPhoenix"}>Github for all them codes</a></p>
                                </li>

                                <li className="collection-item avatar" style={{border:"0px solid white",background:"rgba(0,0,0,0)"}}>
                                    <AiOutlineInstagram className={"circle"} style={{borderRadius:"0"}}/>
                                    <p style={{marginTop:"4%"}}><a className={"white-text"} href={"https://www.instagram.com/hsebinga"}>The Gram'</a></p>
                                </li>

                            </ul>
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div className={"col s12 m4"} style={{marginBottom:"10px",marginTop:"10px"}}>
                        <div className={"pinkgrad"} style={{magin:"0px",padding:"15px 15px 25px 15px", borderRadius:"8px"}}>
                        <h3 className={"font-caveat white-text"}>Trace me here...</h3>
                            <div className="mapouter center-align" style={{margin:"auto"}}>
                                <div className="gmap_canvas">
                                    <iframe width="320" height="320" id="gmap_canvas" src="https://maps.google.com/maps?q=Kolkata&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                                    <style>{`
                                .mapouter{
                                text-align:center;
                                height:320px;
                                width:320px;}
                                .gmap_canvas {
                                background:none!important;
                                height:320px;
                                width:320px;`}
                                </style>
                       </div>
                    </div>
                    </div>
                    <div className={"col s12 m4"} style={{marginBottom:"10px",marginTop:"10px"}}>
                        <div className={"white"} style={{magin:"0px",height:"40vh",padding:"15px 15px 15px 15px", borderRadius:"8px",backgroundImage: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)"}}>
                        <h3 className={"font-neucha"}>Confess Anonymously</h3>
                            <p className={"flow-text grey-text"}>Coming Soon, like a anon form type thingy</p>
                        </div>
                    </div>

                </div>
            </main>
            <Footer/>
            <Particles params={paramsrainbow} id="particles"/>
        </div>
    );
};

export default Contact;