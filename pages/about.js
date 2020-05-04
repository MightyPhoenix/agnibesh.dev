import React, {useEffect} from 'react';
import Head from "next/head";
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import {Params} from "../src/ParticleParams";
import Particles from "react-particles-js";
import HEAD from "../src/HEAD/HEAD";
import Bio from "../src/Bio/Bio";
import Skills from "../src/Skills/Skills";
if (typeof window !== 'undefined'){
    require('materialize-css');
}

const About = () => {
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/contact"}];

    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    },[]);
    return (
        <div className="body">
            <div className="body">
            <HEAD title="A.dev"/>
                {/*HEAD END*/}
            <Navbar NavItems={Nav}/>
                {/*NAV END*/}

            <main className="page" style={{zIndex:"1000"}}>
                <div className="section">

                </div>
                <div className="section">

                </div>
            </main>
                {/*MAIN END*/}

            <Footer/>
            <Particles params={Params} id="particles"/>
        </div>
        </div>
    )};

export default About;