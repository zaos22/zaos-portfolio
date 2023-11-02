import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaAngular, FaReact, FaVuejs, FaLaravel, FaPhp, FaPython, FaJsSquare, FaJava, FaAws, FaDocker, FaDatabase, FaBootstrap } from 'react-icons/fa';

function Skills() {
    return (
        <Navbar expand="lg" className="colorbg">
            <Container className='d-block'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='boxtop boxbottom'>
                        <h1 style={{ fontSize: '70px', fontWeight: 'bold', paddingTop: '50px' }}>My skills</h1>
                    </div>
                </div>
                <div className='hidediv'>
                    <div className='note-align'>
                        <div class="note">
                            <h1 className='titlecards'>Frameworks</h1>
                            <div className='myicons'>
                                <FaReact className='iconset' />
                                <FaAngular className='iconset' />
                                <FaVuejs className='iconset' />
                                <FaLaravel className='iconset3' />
                            </div>
                        </div>
                        <div class="note">
                            <h1 className='titlecards'>Languages</h1>
                            <div className='myicons'>
                                <FaPhp className='iconset' />
                                <FaJsSquare className='iconset' />
                                <FaPython className='iconset' />
                                <FaJava className='iconset3' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidediv2'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div class="note">
                            <h1 className='titlecards'>Frameworks</h1>
                            <div className='myicons'>
                                <FaReact className='iconset' />
                                <FaAngular className='iconset' />
                                <FaVuejs className='iconset' />
                                <FaLaravel className='iconset3' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div class="note">
                            <h1 className='titlecards'>Languages</h1>
                            <div className='myicons'>
                                <FaPhp className='iconset' />
                                <FaJsSquare className='iconset' />
                                <FaPython className='iconset' />
                                <FaJava className='iconset3' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div class="note">
                        <h1 className='titlecards'>Others</h1>
                        <div className='myicons'>
                            <FaAws className='iconset2' />
                            <FaDocker className='iconset2' />
                            <FaDatabase className='iconset2' />
                            <FaBootstrap className='iconset3' />
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default Skills;
