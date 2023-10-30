import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaInstagram, FaGithub, FaShareAlt, FaLinkedin } from 'react-icons/fa';

function Skills() {
    return (
        <Navbar expand="lg" className="colorbg">
            <Container className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <div className='boxtop boxbottom'>
                        <h1>My skills</h1>
                    </div>
                    <div className="boxtop d-flex justify-content-between align-items-center">
                        <div className='boxspace'>
                            <div className="box text-center">
                                <h1>Frameworks</h1>
                                <div>
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <h1>Languages</h1>
                            <div>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="boxtop boxbottom">
                        <div className="box text-center">
                            <h1>Others</h1>
                            <div>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default Skills;
