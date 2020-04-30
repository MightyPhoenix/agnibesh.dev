import React from 'react';

const Navbar = (props) => {
    return (
        <div>
        <nav className="transparent">
            <div className="nav-wrapper container">
                <a className="brand-logo font-vt left" href="/">Agnibesh.DeV</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="font-neucha flow-text right hide-on-med-and-down">
                    {props.NavItems.map((item) => {
                        return(<li><a href={item.link}>{item.name}</a></li>)
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
                        return(<li><a className="white-text" style={{fontSize:"32px", marginTop:"5px"}} href={item.link}>{item.name}</a></li>)
                    })}
                </div>



            </ul>
        </div>
    );
};

export default Navbar;