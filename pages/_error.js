import React from 'react';
import HEAD from "../src/HEAD/HEAD";
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import Particles from "react-particles-js";
import {Params} from "../src/ParticleParams";

const _Error = () => {
    return (
        <div className="body">
            <HEAD title="A.dev"/>
            <h1 className="white-text error font-vt">Error 404</h1>
        </div>
    );
};

export default _Error;