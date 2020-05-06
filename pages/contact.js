import React, {useEffect} from 'react';
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import {Params, paramsrainbow} from "../src/ParticleParams";
import Particles from "react-particles-js";
import HEAD from "../src/HEAD/HEAD";

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
            <HEAD/>
            {/*HEAD END*/}
            <Navbar NavItems={Nav}/>
            {/*NAV END*/}
            <main className="container center valign-wrapper" style={{zIndex:"1000"}}>
                <div className={"section row"}>

                    <div className={"col s12 m4"} style={{marginBottom:"10px",marginTop:"10px"}}>
                        <div className={"white"} style={{magin:"0px",padding:"10px", borderRadius:"8px"}}>
                        <h4 className={"font-neucha"}>Basically my digital footprint</h4>
                        </div>
                    </div>

                    <div className={"col s12 m4"} style={{marginBottom:"10px",marginTop:"10px"}}>
                        <div className={"pinkgrad"} style={{magin:"0px",padding:"15px 15px 15px 15px", borderRadius:"8px"}}>
                        <h3 className={"font-caveat white-text"}>Trace me here...</h3>
                        <p className={"red-text font-vt"} style={{fontSize:"18px"}}>Dont try to act smart to use my API key, it has restrictions!</p>
                        <img alt={"loc"} className={"responsive-img"} style={{borderRadius:"8px"}} src={"https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDdZ2uRKuXlYmpj_OhhPODhalh5ccTsOIg&center=22.67639858740434,88.32972875000003&zoom=10&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=480x360"}/>
                        </div>
                    </div>

                    <div className={"col s12 m4"} style={{marginBottom:"10px",marginTop:"10px"}}>
                        <div className={"white"} style={{magin:"0px",padding:"15px 15px 15px 15px", borderRadius:"8px"}}>
                        <h3 className={"font-neucha"}>Basically my digital footprint</h3>
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