import React, {useState} from 'react';

const Navbar = (props) => {

    return (
        <div style={{padding:"0px",margin:"0px",backgroundColor:"none",zIndex:"1001"}} >
        <nav className="transparent">
            <div className="nav-wrapper container">
                <a className="brand-logo font-vt left glitch" style={{padding:"25px"}} href="/">Agnibesh.DeV</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger right" style={{padding:"25px"}}><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="font-neucha flow-text right hide-on-med-and-down" style={{padding:"25px"}}>
                    {props.NavItems.map((item) => {
                        return(<li key={item.name}><a href={item.link}>{item.name}</a></li>)
                    })}
                </ul>
            </div>
        </nav>

            <ul className="sidenav font-neucha pinkgrad center white-text" id="mobile-demo">
                <div style={{marginTop:"50%"}}>
                    <li>
                        <h5 className="font-vt brand-logo" style={{fontSize:"48px"}}>Agnibesh.DeV</h5>
                    </li>
                    <hr className="center" style={{width:"80%"}}/>

                    {props.NavItems.map((item) => {
                        return(<li key={item.name}><a className="white-text" style={{fontSize:"32px", marginTop:"5px"}} href={item.link}>{item.name}</a></li>)
                    })}
                </div>



            </ul>
        </div>
    );
};

export default Navbar;