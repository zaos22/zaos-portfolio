import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';
import { FaInstagram, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';


function Footer() {

    return (
        <Navbar expand="lg" className="headerbg2">
            <Container className=' d-flex justify-content-center align-items-center'>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <div className='App-logo'>
                                <img src={logo} alt="logo" width={'100px'} />
                            </div>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">&copy; 2023 Zaos, Website</span>
                    </div>
                </footer>
                <ul style={{ fontSize: '30px' }} className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" target='blank' href="https://www.instagram.com/zaos_22/"><FaInstagram /></a></li>
                    <li className="ms-3"><a className="text-muted" target='blank' href="https://github.com/zaos22"><FaGithub /></a></li>
                    <li className="ms-3"><a className="text-muted" target='blank' href="https://www.linkedin.com/in/zazou-abid-501432240/"><FaLinkedin /></a></li>
                    <li className='ms-3'>
                        <a className="text-muted" href="mailto:ozazou2001@gmail.com">
                            <FaMailBulk />
                        </a>
                    </li>
                </ul>
            </Container>
        </Navbar>
    );
}

export default Footer;