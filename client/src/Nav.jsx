import React from 'react';
import './Home.css'
import './Nav.css'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiFillInstagram , AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Nav() {
    return (
        <div className='nav'>
            <Navbar expand="lg" className="bg-body-tertiary nav">
            <Container>
                    <Navbar.Brand href="/login"><RiLogoutBoxLine/></Navbar.Brand>
                    <Navbar.Brand href="/home">DISASTER HELP</Navbar.Brand>
            </Container>
            <Container>
                    <Navbar.Brand href="https://www.instagram.com/disasterhelpindia/?utm_source=ig_embed&ig_rid=48a5ef85-7df6-4607-87c0-2a818e64c75f&ig_mid=1B9BAC75-1CDA-47AE-B0F7-422FDAED42CB"><AiFillInstagram size="30px"/></Navbar.Brand>
                    <Navbar.Brand href="https://www.facebook.com/disaster/"><AiFillFacebook size="28px"/></Navbar.Brand>
                    <Navbar.Brand href="https://blog.twitter.com/en_in/a/2016/twitter-for-crisis-and-disaster-relief-in"><FaSquareXTwitter size="27px"/></Navbar.Brand>
                    <Navbar.Brand href="https://in.linkedin.com/company/national-disaster-management-authority-ndma-india"><FaLinkedin size="27px"/></Navbar.Brand>
            </Container>
            <Navbar.Brand href="/donate" className='btn-donate'>DONATE</Navbar.Brand>
            </Navbar>
        </div>
    );
}
export default Nav;