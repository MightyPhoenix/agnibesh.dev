import React, {useEffect} from 'react';
import Head from "next/head";
import Navbar from '../src/Navbar/Navbar';
if (typeof window !== 'undefined'){
   require('materialize-css');
}

import Footer from '../src/Footer/Footer';

const index = () =>{
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
        <main>
            <div className="section">
                <div className="row container valign-wrapper center jumbo">
                    <div className="col l4 hide-on-med-and-down ">
                        <img width="95%" className="circle responsive-img" src="/displaypicture.jpg" alt="myface"/>
                    </div>
                    <div className="col l8 center white-text">
                        <img width="60%" className="hide-on-large-only hide-on-extra-large-only circle responsive-img" style={{marginTop:"20px"}} src="/displaypicture.jpg" alt="myface"/>
                        <h1 className="h1 font-caveat">Agnibesh Mukherjee</h1>
                        <h4 className="h4 font-neucha"> Computer Enthusiast <span className="hide-on-small-and-down"> | </span> JavaScript Ninja </h4>
                        <p className="flow-text font-neucha ">I grew up thinking computers were magical, and here I am making magic happen. I always like to create what I like for instance music, graphics, applications, videos and the Technology has provided me with the parallel applications to achieve that in my home computer i.e FL Studio, Photoshop, Adobe Premier Pro</p>
                        <blockquote className="flow-text font-neucha">Didn't like much computer games but started with <a href="www.habbo.com">habbo.com</a> but as usual made a clone of that game too! But later on started an affection for FPS games.</blockquote>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="row white-text">
                    <div className="col s12">
                        <h3 className="center">Skills</h3>
                    </div>
                    <div className="col s12">
                        <h3 className="center">Skills</h3>
                    </div>
                </div>
            </div>
        </main>
    <Footer/>

    </div>
)};

export default index;