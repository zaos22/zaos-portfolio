import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaAngular, FaReact, FaVuejs, FaLaravel, FaPhp, FaPython, FaJsSquare, FaJava, FaAws, FaDocker, FaDatabase, FaBootstrap } from 'react-icons/fa';

function SkillsDark() {
    return (
        <Navbar expand="lg" className="space">
            <Container className='d-block space-container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='boxtop boxbottom text-white'>
                        <h1 style={{ fontSize: '70px', fontWeight: 'bold', paddingTop: '50px' }}>My skills</h1>
                    </div>
                </div>
                <div className="chaos" />
                <div className='hidediv'>
                    <div className="planet1"><div className="chaos" /></div>
                    <div className='note-align'>
                        <div className="note">
                            <div className='titlecards text-black'>
                                <p>Web Languages</p>
                            </div>
                            <div className='myicons text-black'>
                                <FaPhp className='iconset' />
                                <FaJsSquare className='iconset' />
                                <FaPython className='iconset' />
                                <FaJava className='iconset3' />
                            </div>
                        </div>
                        <div className="note">
                            <div className='titlecards text-black'>
                                <p>Web Frameworks</p>
                            </div>
                            <div className='myicons text-black'>
                                <FaReact className='iconset' />
                                <FaAngular className='iconset' />
                                <FaVuejs className='iconset' />
                                <FaLaravel className='iconset3' />
                            </div>
                        </div>
                    </div>
                    <div className="planet2 floatxt"><div className="chaos" /></div>
                </div>
                <div className='hidediv2'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="note">
                            <div className='titlecards text-black'>
                                <p>Web</p>
                                <p>Languages</p>
                            </div>
                            <div className='myicons text-black'>
                                <FaPhp className='iconset' />
                                <FaJsSquare className='iconset' />
                                <FaPython className='iconset' />
                                <FaJava className='iconset3' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="note">

                            <div className='titlecards text-black'>
                                <p>Web</p>
                                <p>Frameworks</p>
                            </div>
                            <div className='myicons text-black'>
                                <FaReact className='iconset' />
                                <FaAngular className='iconset' />
                                <FaVuejs className='iconset' />
                                <FaLaravel className='iconset3' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="note">
                        <div className='titlecards text-black'>
                            <p>Others</p>
                        </div>
                        <div className='myicons text-black'>
                            <FaAws className='iconset2' />
                            <FaDocker className='iconset2' />
                            <FaDatabase className='iconset2' />
                            <FaBootstrap className='iconset3' />
                        </div>
                    </div>
                </div>
                <div className='marginb'></div>
            </Container>
        </Navbar>
    );
}

export default SkillsDark;
