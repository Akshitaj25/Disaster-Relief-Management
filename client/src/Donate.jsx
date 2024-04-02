import React from 'react';
import './Home.css'
import './Donate.css'
import { AiOutlineCopyright } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';
import Subnav from './Subnav.jsx';
import Nav from './Nav.jsx';

function Donate() {
    return (
        <div className="bg1" >
            <Nav/>
            <Subnav/>
            <div className="cont">
                <div className="d-flex dnt">
                    <img src='./src/assets/donateImage.jpg' className='dnt-image'></img>
                </div>
                <div className="DonateBox d-flex justify-content-center align-items-center">
                    <div className="DonateBox1 d-flex justify-content-center align-items-center">
                        Donate  
                    </div>
                    <div className="DonateBox2 d-flex justify-content-center align-items-center">
                        <p>
                        Support to the Disaster Help is not just support to one organization, but to the world’s largest humanitarian network—known and trusted in virtually every country in the world. Donate today to our global work or to support a specific emergency response.
                        </p>
                    </div>
                </div>
                <div className="Desc justify-content-center align-items-center ">
                    <div className='d-flex justify-content-center align-items-center'>
                        <p>
                            <b>Your valuable donation will help us deliver lifesaving support and services to millions of people around the world. </b><br/><br/>
                            <div className="para">
                                Our incredible Red Cross and Red Crescent Societies are there before crises, helping communities to prepare and reduce their risks. They are first on the ground when a disaster strikes, providing lifesaving assistance and a shoulder to lean on during some of the worst times in people’s lives. And they remain by the side of affected communities long after others have left to help them rebuild their lives and recover. We’ve been supporting people no matter who or where they are, in times of crisis and peace, for more than 100 years. By supporting us today, you will help us continue our principled humanitarian mission in a world facing ever-increasing humanitarian needs. We are grateful for your support and committed to spending your money in an effective, accountable and trusted way. Learn more about the strategic priorities your money will support in our Global Plan.
                            </div>
                        </p>
                    </div>
                    <div className='don-heading'>
                        Our Banking Information for Direct Donation
                    </div>
                    <div className="drp-dwn">
                        <Accordion defaultActiveKey="7" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Donate in Indian Rupees (INR)</Accordion.Header>
                                <Accordion.Body>
                                    <b>Please note that it is mandatory to indicate the IBAN code (International Bank Account Number) for all bank transfers.</b><br/><br/><b>ACCOUNT:</b> 240-C0128346.0<br/><br/><b>SWIFT:</b> UBSWCHZH80A<br/><br/><b>IBAN:</b> CH5800240240C01283460<br/><br/><ul><li><b>Bank name:</b>UBS Switzerland AG</li><br/><li><b>Bank address:</b> Rue des Noirettes 35, 1227 Acacias, Geneva, Switzerland</li><br/><li><b>Account name:</b> International Federation of Red Cross and Red Crescent Societies</li><br/><li><b>Beneficiary address:</b> Chemin des Crêts 17, Petit-Saconnex, CH-1209, Geneva, Switzerland</li></ul><br/>If you have any queries or concerns regarding which IFRC bank account to use, please contact our Accounts Receivable Coordinator, Tricia Baglione, by phone +41 22 730 4916 or email tricia.baglione@ifrc.org.<br/>If you have any queries or concerns regarding donations, please contact the donation team by email prd.geneva@ifrc.org.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Donate in Swiss francs (CHF)</Accordion.Header>
                                <Accordion.Body>
                                    <b>Please note that it is mandatory to indicate the IBAN code (International Bank Account Number) for all bank transfers.</b><br/><br/><b>ACCOUNT:</b> 240-C0128346.0<br/><br/><b>SWIFT:</b> UBSWCHZH80A<br/><br/><b>IBAN:</b> CH5800240240C01283460<br/><br/><ul><li><b>Bank name:</b>UBS Switzerland AG</li><br/><li><b>Bank address:</b> Rue des Noirettes 35, 1227 Acacias, Geneva, Switzerland</li><br/><li><b>Account name:</b> International Federation of Red Cross and Red Crescent Societies</li><br/><li><b>Beneficiary address:</b> Chemin des Crêts 17, Petit-Saconnex, CH-1209, Geneva, Switzerland</li></ul><br/>If you have any queries or concerns regarding which IFRC bank account to use, please contact our Accounts Receivable Coordinator, Tricia Baglione, by phone +41 22 730 4916 or email tricia.baglione@ifrc.org.<br/>If you have any queries or concerns regarding donations, please contact the donation team by email prd.geneva@ifrc.org.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Donate in euros (EUR)</Accordion.Header>
                                <Accordion.Body>
                                    <b>Please note that it is mandatory to indicate the IBAN code (International Bank Account Number) for all bank transfers.</b><br/><br/><b>ACCOUNT:</b> 240-C0573530.0<br/><br/><b>SWIFT:</b> UBSWCHZH80A<br/><br/><b>IBAN:</b> CH6200240240C05735300<br/><br/><ul><li><b>Bank name:</b>UBS Switzerland AG</li><br/><li><b>Bank address:</b> Rue des Noirettes 35, 1227 Acacias, Geneva, Switzerland</li><br/><li><b>Account name:</b> International Federation of Red Cross and Red Crescent Societies</li><br/><li><b>Beneficiary address:</b> Chemin des Crêts 17, Petit-Saconnex, CH-1209, Geneva, Switzerland</li></ul><br/>If you have any queries or concerns regarding which IFRC bank account to use, please contact our Accounts Receivable Coordinator, Tricia Baglione, by phone +41 22 730 4916 or email tricia.baglione@ifrc.org<br/>If you have any queries or concerns regarding donations, please contact the donation team by email prd.geneva@ifrc.org
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Donate in Japanese yen (JPY)</Accordion.Header>
                                <Accordion.Body>
                                    <b>Please note that it is mandatory to indicate the IBAN code (International Bank Account Number) for all bank transfers.</b><br/><br/><b>ACCOUNT:</b> 240-C0230821.9<br/><br/><b>SWIFT:</b> UBSWCHZH80A<br/><br/><b>IBAN:</b> CH3900240240C02308219<br/><br/><ul><li><b>Bank name:</b> UBS Switzerland AG</li><br/><li><b>Bank address:</b> Rue des Noirettes 35, 1227 Acacias, Geneva, Switzerland</li><br/><li><b>Account name:</b> International Federation of Red Cross and Red Crescent Societies</li><br/><li><b>Beneficiary address:</b> Chemin des Crêts 17, Petit-Saconnex, CH-1209, Geneva, Switzerland</li></ul><br/>If you have any queries or concerns regarding which IFRC bank account to use, please contact our Accounts Receivable Coordinator, Tricia Baglione, by phone +41 22 730 4916 or email tricia.baglione@ifrc.org<br/>If you have any queries or concerns regarding donations, please contact the donation team by email prd.geneva@ifrc.org
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Donate in United States dollars (USD)</Accordion.Header>
                                <Accordion.Body>
                                    <b>Please note that it is mandatory to indicate the IBAN code (International Bank Account Number) for all bank transfers.</b><br/><br/><b>ACCOUNT:</b> 240-C0128346.4<br/><br/><b>SWIFT:</b> UBSWCHZH80A<br/><br/><b>IBAN:</b> CH4700240240C01283464<br/><br/><ul><li><b>Bank name:</b> UBS Switzerland AG</li><br/><li><b>Bank address:</b> Rue des Noirettes 35, 1227 Acacias, Geneva, Switzerland</li><br/><li><b>Account name:</b> International Federation of Red Cross and Red Crescent Societies</li><br/><li><b>Beneficiary address:</b> Chemin des Crêts 17, Petit-Saconnex, CH-1209, Geneva, Switzerland</li></ul><br/>If you have any queries or concerns regarding which IFRC bank account to use, please contact our Accounts Receivable Coordinator, Tricia Baglione, by phone +41 22 730 4916 or email tricia.baglione@ifrc.org<br/>If you have any queries or concerns regarding donations, please contact the donation team by email prd.geneva@ifrc.org
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>
            <div className='copyright'>
            <b><AiOutlineCopyright/> Akshita Jain, V. Sai Shreyas </b>
            </div>
        </div>
    );
}
export default Donate;