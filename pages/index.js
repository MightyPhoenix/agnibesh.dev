import React, {useEffect} from 'react';

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
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    },[]);
    return (
    <div className="body">
        <HEAD title="Agnibesh.dev"/>
        {/*HEAD END*/}
        <Navbar NavItems={Nav}/>
        {/*NAV END*/}
        <main>
            <div className="section">
                <Bio/>
            </div>
            <div className="section">
                <Skills/>
            </div>
        </main>
        {/*MAIN END*/}
    <Footer/>

    </div>
)};

export default index;