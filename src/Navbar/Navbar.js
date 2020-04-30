import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark transparent">
                <div className="container">
                <a className="navbar-brand font-vt" href="#">Agnibesh.DeV</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {props.NavItems.map((item)=>{
                            return(
                                <li className="nav-item">
                                    <a className="nav-link" href={item.link}>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;