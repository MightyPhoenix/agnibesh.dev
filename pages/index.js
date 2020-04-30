import React from 'react';
import Head from "next/head";
import Navbar from '../src/Navbar/Navbar';
import Footer from '../src/Footer/Footer';

const index = () =>{
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/contact"}];
    return (
    <div>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Agnibesh.dev</title>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossOrigin="anonymous"></script>
        </Head>
        <Navbar NavItems={Nav}/>
        <main className="container">
            <div className="jumbotron mt-4 transparent text-white">
                <div className="row h-100">
                    <div className="col-md-4 justify-content-center text-center">
                        <img width="80%" className="rounded-circle align-middle" src="/displaypicture.jpg" alt="myface"/>
                    </div>
                    <div className="col-md-8 col-sm-12 justify-content-center align-self-center text-center text-grad">
                        <h1 className="h1 font-caveat pt-sm-2">Agnibesh Mukherjee</h1>
                        <h4 className="h4 font-neucha"> Computer Enthusiast | JavaScript Ninja </h4>
                        <p>I grew up thinking computers were magical, and here I am making magic happen. I always like to create what I like for instance music, graphics, applications, videos and the Technology has provided me with the parallel applications to achieve that in my home computer i.e FL Studio, Photoshop, Adobe Premier Pro</p>
                        <blockquote className="">Didn't like much computer games but started with <a href="www.habbo.com">habbo.com</a> but as usual made a clone of that game too! But later on started an affection for FPS games.</blockquote>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
)};

export default index;