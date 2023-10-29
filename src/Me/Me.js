import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import logo from '../Oussama_Zazou_Abid.png';

function Me() {

    return (
        <Navbar expand="lg" className="colorbg2">
            <Container className='d-flex justify-content-center align-items-center'>
                <div>
                    <Card style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginTop: '10px', marginBottom: '50px' }}>
                        <div className='card-align'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='image'>
                                    <Card.Img variant="top" className=' image-marco' src={logo} />
                                </div>
                            </div>
                            <Card.Body className='mt-5'>
                                <div className='mytitle'>
                                    <Card.Title className='mt-5' style={{ fontSize: '50px', fontWeight: 'bold' }}>Hello, and welcome to my space!</Card.Title>
                                </div>
                                <Card.Text className='pt-3'>
                                    <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                        I'm Oussama, a passionate web developer with a strong command of full-stack programming.
                                        My objective is to turn ideas into minimalist websites, but at the same time that captivate and engage users.
                                        Let's build something simple, but amazing together!
                                    </div>
                                </Card.Text>
                                <div className='d-flex justify-content-center pt-3'>
                                    <button className='btn_color'>Download CV</button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </Container>
        </Navbar>
    );
}

export default Me;
