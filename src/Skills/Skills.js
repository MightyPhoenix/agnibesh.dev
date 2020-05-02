import React from 'react';
import {SkillData} from "./SkillData";

const Skills = () => {

    return (
        <div className="row container valign-wrapper jumbo2 white-text">
            <div className="hide-on-med-and-down col l6 s12">
                <h1 className="center font-caveat" style={{fontSize:"180px"}}>Skills</h1>
            </div>
            <div className="col l6 s12">
                <div className="hide-on-large-only hide-on-extra-large-only">
                    <h1 style={{padding:"0",fontSize:"72px",}} className="center font-caveat" >Skills</h1>
                </div>
                <ul className="collection transparent flow-text" style={{borderColor:"transparent", padding:"auto 20px"}}>
                    {SkillData.map((skill)=>{
                        return(
                            <li key={skill.skillName} className="collection-item avatar transparent" style={{borderColor:"transparent"}}>
                                <img src={skill.imgLink} alt={skill.skillName} className="circle responsive-img"/>
                                <span className="title font-neucha" style={{fontSize:"24px"}}>{skill.skillName}</span>
                                <p className="font-vt" style={{fontSize:"22px", padding:"5px 0px"}}>{skill.skillLevel}<br/>
                                    <div className={skill.skillProgress.color2}>
                                        <div className={skill.skillProgress.color1} style={{width: skill.skillProgress.width}}></div>
                                    </div>
                                </p>
                                <a href="#!" className="secondary-content yellow-text text-darken-1">
                                    <Stars n={skill.grade}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

const Stars = (props) =>{
    let content =[];
    for (let i=0;i<props.n;i++){
        content.push(<i className="material-icons">grade</i>);
    }
    return content;
}

export default Skills;