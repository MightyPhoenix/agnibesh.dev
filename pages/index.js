import React, {useEffect, useState} from 'react';
import Particles from 'react-particles-js';
import {Params, paramsrainbow} from "../src/ParticleParams";

import HEAD from "../src/HEAD/HEAD";
import Navbar from '../src/Navbar/Navbar';
import Footer from '../src/Footer/Footer';
import Skills from "../src/Skills/Skills";
import Bio from "../src/Bio/Bio";

if (typeof window !== 'undefined'){
   require('materialize-css');
}

const index = () =>{
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/404"}];

    return (

    <div className="body">
        <HEAD title="A.dev"/>
        {/*HEAD END*/}
        <Navbar NavItems={Nav}/>
        {/*NAV END*/}

        <main className="page" style={{zIndex:"1000"}}>
            <div className="section">
                <Bio/>
            </div>
            <div className="section">
                <Skills/>
            </div>
        </main>
        {/*MAIN END*/}

    <Footer/>
        <Particles params={paramsrainbow} id="particles"/>
    </div>
)};
export default index;