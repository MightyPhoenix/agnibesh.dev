import React, {useEffect} from 'react';
import Particles from 'react-particles-js';
import {Params} from "../src/ParticleParams";

import HEAD from "../src/HEAD/HEAD";
import Navbar from '../src/Navbar/Navbar';
import Footer from '../src/Footer/Footer';
import Skills from "../src/Skills/Skills";
import Bio from "../src/Bio/Bio";


if (typeof window !== 'undefined'){
   require('materialize-css');
}

const index = () =>{
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/contact"}];

    useEffect(()=>{
        // var elems = document.querySelectorAll('.sidenav');
        // var instances = M.Sidenav.init(elems);
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.parallax');
        //     var instance = M.Parallax.init(elems);
        // });
        M.AutoInit();
    },[]);
    return (
    <div className="body">
        <HEAD title="A.dev"/>
        {/*HEAD END*/}
        <Navbar NavItems={Nav}/>
        {/*NAV END*/}
        <main style={{zIndex:"1000"}}>
            <div className="section">
                <Bio/>
            </div>
            <div className="section">
                <Skills/>
            </div>
        </main>
        {/*MAIN END*/}

    <Footer/>
        <Particles params={Params} id="particles"/>
    </div>
)};
export default index;