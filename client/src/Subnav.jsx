import React from 'react';
import './Subnav.css'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';


function Subnav() {
    return (
        <div className='sn'>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className="subnav-btns d-flex">
                            <div className="subnav-btn">
                                <Navbar.Brand href="/home">HOME</Navbar.Brand>
                            </div>
                            <div className="subnav-btn">
                                <Navbar.Brand href="/report-emergency">REPORT EMERGENCY</Navbar.Brand>
                            </div>
                            <div className="subnav-btn">
                                <Navbar.Brand href="/home">VOLUNTEER</Navbar.Brand>
                            </div>
                            <div className="subnav-btn">
                                <Navbar.Brand href="/home">DOs AND DONTs</Navbar.Brand>
                            </div>
                            <div className="subnav-btn">
                                <Navbar.Brand href="/home">MAGAZINE</Navbar.Brand>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
}
export default Subnav;