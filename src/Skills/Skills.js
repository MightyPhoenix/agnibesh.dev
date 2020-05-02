import React from 'react';

const Skills = () => {
    return (
        <>
        <div className="hide-on-large-only hide-on-extra-large-only">
            <h1 style={{padding:"0",fontSize:"72px",}} className="center font-caveat" >Skills</h1>
        </div>
        <ul className="collection transparent flow-text" style={{borderColor:"transparent", padding:"auto 20px"}}>
            <li className="collection-item avatar transparent" style={{borderColor:"transparent"}}>
                <img src="https://codeguida.com/media/post_title/React.js_logo.svg_fjk2YxB.png" alt="react" className="circle responsive-img"/>
                <span className="title font-neucha" style={{fontSize:"26px"}}>React JS</span>
                <p className="font-vt" style={{fontSize:"22px", padding:"5px 0px"}}>Intermidiate<br/>
                    <div className="progress">
                        <div className="determinate" style={{width: "60%"}}></div>
                    </div>
                </p>
                <a href="#!" className="secondary-content yellow-text text-darken-1">
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                </a>
            </li>
            <li className="collection-item avatar transparent" style={{borderColor:"transparent"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="js" className="circle responsive-img"/>
                <span className="title font-neucha" style={{fontSize:"26px"}}>JavaScript (ES6)</span>
                <p className="font-vt" style={{fontSize:"22px", padding:"5px 0px"}}>Intermidiate<br/>
                    <div className="progress">
                        <div className="determinate" style={{width: "80%"}}></div>
                    </div>
                </p>
                <a href="#!" className="secondary-content yellow-text text-darken-1">
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                </a>
            </li>
            <li className="collection-item avatar transparent" style={{borderColor:"transparent"}}>
                <img src="https://pythonprogramming.net/static/images/finance/python-programming-language.png" alt="py" className="circle responsive-img"/>
                <span className="title font-neucha" style={{fontSize:"26px"}}>Python3</span>
                <p className="font-vt" style={{fontSize:"22px", padding:"5px 0px"}}>Intermidiate<br/>
                    <div className="progress">
                        <div className="determinate" style={{width: "75%"}}></div>
                    </div>
                </p>
                <a href="#!" className="secondary-content yellow-text text-darken-1">
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                </a>
            </li>
            <li className="collection-item avatar transparent" style={{borderColor:"transparent"}}>
                <img src="https://avatars0.githubusercontent.com/u/1335026?v=3&s=280" alt="fire" className="circle responsive-img"/>
                <span className="title font-neucha" style={{fontSize:"26px"}}>Firebase</span>
                <p className="font-vt" style={{fontSize:"22px", padding:"5px 0px"}}>Begineer<br/>
                    <div className="progress">
                        <div className="determinate" style={{width: "45%"}}></div>
                    </div>
                </p>
                <a href="#!" className="secondary-content yellow-text text-darken-1">
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                </a>
            </li>
        </ul>
    </>
    );
};

export default Skills;