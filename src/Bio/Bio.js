import React from 'react';

const Bio = () => {
    return (
        <div className="row container valign-wrapper center jumbo">
            <div className="col l4 hide-on-med-and-down ">
                <img width="95%" className="circle responsive-img" src="/displaypicture.jpg" alt="myface"/>
            </div>
            <div className="col l8 center white-text">
                <img width="60%" className="hide-on-large-only hide-on-extra-large-only circle responsive-img" style={{marginTop:"20px"}} src="/displaypicture.jpg" alt="myface"/>
                <h1 className="h1 font-caveat">Agnibesh Mukherjee</h1>
                <h4 className="h4 font-neucha"> Computer Enthusiast <span className="hide-on-small-and-down"> | </span> JavaScript Ninja </h4>
                {/*<p className="flow-text font-neucha ">I grew up thinking computers were magical, and here I am making magic happen. I always like to create what I like for instance music, graphics, applications, videos and the Technology has provided me with the parallel applications to achieve that in my home computer i.e FL Studio, Photoshop, Adobe Premier Pro</p>*/}
                <p className="flow-text font-neucha ">
                    The tech-support guy, neighborhood Facebook hacker.
                    People refer to me as those, but I keep a keen interest in FullStack Development (MER/VN),
                    Machine Learning, and Network Security areas.
                    Actively strive in Hackathons and Techfest.
                    Won ACM East India Hackathon 2020 with my Fabulous Team.
                </p>
                <p className="flow-text font-neucha">
                    Apart from these I am a very meticulous listener and a leisurely learner because of perfectionism,
                    have strong opinions mostly regarding everything.
                    Also, an INFJ if that makes sense...
                </p>
                <blockquote className="black-border left-align flow-text font-neucha" style={{borderRadius:"3px"}}>
                    Go to Games are Apex Legends, Destiny 2, DirtyBomb <br/> <a className="teal-text text-accent-1" href="https://steamcommunity.com/id/MightyPhoenix7">Steam : MightyPhoenix7</a>
                </blockquote>
            </div>
        </div>
    );
};

export default Bio;