import React from 'react';
import {BioData} from "./BioData";

const Bio = () => {
    return (
        <div className="row container valign-wrapper center jumbo">
            <div className="col l4 hide-on-med-and-down ">
                <img width="95%" className="circle responsive-img" src={BioData.img} alt="myface"/>
            </div>
            <div className="col l8 center white-text">
                <img width="60%" className="hide-on-large-only hide-on-extra-large-only circle responsive-img" style={{marginTop:"20px"}} src="/displaypicture.jpg" alt="myface"/>
                <h1 className="h1 font-caveat">{BioData.Name}</h1>
                <h4 className="h4 font-neucha"> {BioData.tagLine[0]} <br className={"hide-on-med-and-up"}/> <span className="hide-on-small-and-down"> | </span> {BioData.tagLine[1]} </h4>
                <h5 className="font-caveat" style={{fontSize:"26px"}}>B.Tech (CSE) 2nd Year</h5>
                {BioData.paragraphs.map((para)=>{
                    return(
                        <p className="flow-text font-neucha ">{para}</p>
                    );
                })}

                <blockquote className="black-border left-align flow-text font-neucha" style={{borderRadius:"3px"}}>
                    Head <a className="teal-text text-accent-1" href="/about">here</a> for more!
                </blockquote>

                <blockquote className="black-border left-align flow-text font-neucha" style={{borderRadius:"3px"}}>
                    Go to Games are Apex Legends, Destiny 2, DirtyBomb <br/> <a className="teal-text text-accent-1" href="https://steamcommunity.com/id/MightyPhoenix7">Steam : MightyPhoenix7</a>
                </blockquote>
            </div>
        </div>
    );
};

export default Bio;