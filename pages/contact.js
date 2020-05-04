import React, {useEffect} from 'react';
import Head from "next/head";
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import {Params} from "../src/ParticleParams";
import Particles from "react-particles-js";
if (typeof window !== 'undefined'){
    require('materialize-css');
}

const Contact = () => {
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/contact"}];

    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    },[]);
    return (
        <div className="body">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="theme-color" content="#000" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                <title>Agnibesh.dev</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                        crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                        crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                        crossOrigin="anonymous"/>
            </Head>
            {/*HEAD END*/}
            <Navbar NavItems={Nav}/>
            {/*NAV END*/}
            <main className="container center valign-wrapper">

            </main>
            <Footer/>
            <Particles params={Params} id="particles"/>
        </div>
    );
};

export default Contact;