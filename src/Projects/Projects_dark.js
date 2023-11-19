import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ProjectsDark() {
    return (
        <Navbar expand="lg" className="space">
            <Container className='d-block text-center space-container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='boxtop boxbottom floatxt'>
                        <h1 style={{ fontSize: '70px', fontWeight: 'bold', paddingTop: '50px' }}>My projects</h1>
                    </div>
                </div>
                <div className="chaos" />
                <div className='hidediv'>
                    <div className='note-align'>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>Mirmeet</p><h5 className='pb-3' style={{ color: '#9b7653' }} >Laravel - Vue - WebSocket</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>A decentralised social network, blockchain based, and with real-time chat.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/PymeraliaProject-Sprint-4/MirmeetProject.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>PymeShield</p><h5 className='pb-3' style={{ color: '#9b7653' }} >Laravel - Vue - Python - Kivy</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>Cybersecurity and inventory audit management application and Moodle-style LMS.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/PymeraliaProject-Sprint-4/Pymeshield-Sprint-6.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className='note-align'>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>DeepCycle</p><h5 className='pb-3' style={{ color: '#9b7653' }} >Laravel - React - Bootstrap</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>Bicycle store with integrated ERP system and dynamic website.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/zaos22/deep-cycle_shop.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>Portfolio</p><h5 className='pb-3' style={{ color: '#9b7653' }} >React - Bootstrap</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>Minimalist portfolio page with warm colors and simple structure.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/zaos22/zaos-portfolio.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidediv2'>
                    <div className="chaos" />
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>Mirmeet</p><h5 className='pb-3' style={{ color: '#9b7653' }} >Laravel - Vue - WebSocket</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>A decentralised social network, blackchain based, and with real-time chat.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/PymeraliaProject-Sprint-4/MirmeetProject.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>PymeShield</p><h5 className='pb-3' style={{ color: '#9b7653' }} >Laravel - Vue - Python - Kivy</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>Cybersecurity and inventory audit management application and Moodle-style LMS.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/PymeraliaProject-Sprint-4/Pymeshield-Sprint-6.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>DeepCycle</p><h5 className='pb-3' style={{ color: '#9b7653' }} >Laravel - React - Bootstrap</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>Bicycle store with integrated ERP system and dynamic website.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/zaos22/deep-cycle_shop.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="note floatxt1">
                            <div className='titlecards'>
                                <p>Portfolio</p><h5 className='pb-3' style={{ color: '#9b7653' }} >React - Bootstrap</h5>
                            </div>
                            <div className='text-center' style={{ fontSize: '16px' }}>
                                <p>Minimalist portfolio page with warm colors and simple structure.</p>
                            </div>
                            <div className='d-flex justify-content-center pt-3'>
                                <a href='https://github.com/zaos22/zaos-portfolio.git' target='blank' style={{ textDecoration: 'none' }} className='btn_color'>GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='marginb'></div>
            </Container>
        </Navbar>
    );
}

export default ProjectsDark;
