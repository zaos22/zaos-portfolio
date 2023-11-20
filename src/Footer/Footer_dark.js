import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';
import { FaInstagram, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';


function FooterDark() {

    return (
        <Navbar expand="lg" className="space">
            <Container className=' d-flex justify-content-center align-items-center space-container'>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <a href="/" className="me-2 text-muted text-decoration-none lh-1">
                            <div className='App-logo'>
                                <img src={logo} alt="logo" width={'100px'} />
                            </div>
                        </a>
                        <span className="text-white">&copy; 2023 Zaos, Website</span>
                    </div>

                </footer>
                <ul style={{ fontSize: '30px' }} className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <span style={{ fontWeight: 'bold', color: '#fff' }} role='list' aria-label="Contact me" className="text-white">Contact me</span>
                    <li className="ms-3"><a className="text-white" target='blank' href="https://www.instagram.com/zaos_22/"><span role='link' aria-label="Visit my instagram"><FaInstagram className='iconh' /></span></a></li>
                    <li className="ms-3"><a className="text-white" target='blank' href="https://github.com/zaos22"><span role='link' aria-label="Visit my github"><FaGithub className='iconh' /></span></a></li>
                    <li className="ms-3"><a className="text-white" target='blank' href="https://www.linkedin.com/in/zazou-abid-501432240/"><span role='link' aria-label="Visit my linkedin"><FaLinkedin className='iconh' /></span></a></li>
                    <li className='ms-3'>
                        <a className="text-white" aria-describedby='email' href="mailto:ozazou2001@gmail.com">
                            <span role='link' aria-label="Contact me"><FaMailBulk className='iconh' /></span>
                        </a>
                    </li>
                </ul>
            </Container>
        </Navbar>
    );
}

export default FooterDark;