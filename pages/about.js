import React, {useEffect} from 'react';
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import {Params, paramsrainbow} from "../src/ParticleParams";
import Particles from "react-particles-js";
import HEAD from "../src/HEAD/HEAD";

if (typeof window !== 'undefined'){
    require('materialize-css');
}

const About = () => {
    const Nav = [{name: "Home", link: "/"},{name: "About", link: "/about"},{name: "Contact", link: "/contact"},{name:"404", link: "/404"}];

    const AboutData = [
        {
            Title:"Activities",
            IconName:"local_activity",
            Content:"I have Participated in Zoohackathon(kolkata) - Finalists, ACM East India Hackathon, Kolkata - Winner, HackNpitch - Qualifier. Also have Co-Authored on a paper published in ICDCIT-KIIT(PIC)-2020 Titled : Indoor Air Pollution Controlling Device. Experienced the most hyped tech-fest KSHITIJ-2020 in IIT-KGP",
            TitleBg:{border:"0px",borderRadius:"15px",borderColor:"black"}
        },
        {
            Title:"Alma Mater",
            IconName:"school",
            Content:"Started off life in TinyTots, Alipore. Then I was in Kendriya Vidyalaya Fort William for schooling and then got into B.Tech (CSE) Undergrad at Calcutta Institute of Engineering and Management, School was great and college is too (mostly).",
            TitleBg:{border:"0px",borderRadius:"15px",borderColor:"black"}
        },
        {
            Title:"This Website",
            IconName:"code",
            Content:"This website is created with Next.Js using React library and Materialize Css and is currently being hosted on Netlify. (This was a small hobby project during the Covid-19 Lock down)",
            TitleBg:{border:"0px",borderRadius:"15px",borderColor:"black"}
        },
        {
            Title:"Other Skills",
            IconName:"apps",
            Content:"My other skills include Photoshop, PremierPro, The whole microsoft office (which is usually used). I can speak in English, Hindi, Bengali and a bit of few others but can only write in first two of them.",
            TitleBg:{border:"0px",borderRadius:"15px",borderColor:"black"}
        },
    ];

    useEffect(()=>{
        var elem = document.querySelector('.collapsible.expandable');
        var instance = M.Collapsible.init(elem,{
            accordion:false
        });

    },[]);
    return (
        <div className="body">
            <div className="body">
            <HEAD title="A.dev"/>
                {/*HEAD END*/}
            <Navbar NavItems={Nav}/>
                {/*NAV END*/}

            <main className="page container" style={{zIndex:"1000"}}>
                <div className="section">
                    <ul className="collapsible expandable" style={{borderRadius:"15px",border:"0px",margin:"auto"}}>
                        {AboutData.map((list)=>{
                            return(
                                <li className="active" key={list.Title} style={{borderColor:"black",border:"0px",margin:"10px 0px"}}>
                                    <div className="collapsible-header center-align white-text font-caveat flow-text valign-wrapper text-grad-about" style={list.TitleBg}>
                                            <i className="large material-icons">{list.IconName}</i>
                                            {list.Title}
                                    </div>
                                    <div className="center collapsible-body white-text flow-text font-neucha" style={{borderRadius:"15px",borderColor:"black",background:"transparent"}}><span>{list.Content}</span></div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="section">

                </div>
            </main>
                {/*MAIN END*/}

            <Footer/>
            <Particles params={paramsrainbow} id="particles"/>
        </div>
        </div>
    )};

export default About;