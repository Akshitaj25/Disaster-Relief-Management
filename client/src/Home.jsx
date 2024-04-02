import React from 'react';
import './Home.css'
import Nav from './Nav.jsx'
import { AiFillInstagram } from "react-icons/ai";
import Subnav from './Subnav.jsx';
import Marquee from "react-fast-marquee";
import { AiOutlineCopyright } from "react-icons/ai";
import LeftPanel from './left-panel.jsx';
import RightPanel from './RightPanel.jsx';

function Home() {
    return (
        <div className="bg1" >
            <Nav/>
            <Subnav/>
            <Marquee>
                <div className="marquee d-flex">
                    <p>COVID-19: Get the latest updates and resources from the <a href="https://www.who.int/"> World Health Organization.</a></p>
                    <p>COVID-19 Helpline Number : +91-11-23978046, Toll Free : 1075, Helpline Email ID : ncov2019@gov.in</p>
                </div>
            </Marquee>
            <div className="homeMaster d-flex">
                <div className="left">
                    <LeftPanel/>
                </div>
                <div className="middle">
                </div>
                <div className="right">
                    <RightPanel/>
                </div>
            </div>
            <hr/>
            <div className='copyright'>
            <b><AiOutlineCopyright/> Akshita Jain, V. Sai Shreyas </b>
            </div>
        </div>
    );
}
export default Home;