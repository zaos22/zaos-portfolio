import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaUniversity, FaBuilding } from 'react-icons/fa';

function Education() {
    return (
        <Navbar expand="lg" className="colorbg22">
            <Container className='d-flex justify-content-center align-items-center' style={{ height: 'auto' }}>
                <div className='d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginLeft: '0', marginTop: '10px', marginBottom: '50px' }}>
                        <div className='text-center'>
                            <div className='card-align'>
                                <Card.Body className='mt-3'>
                                    <div className='mytitle text-center'>
                                        <Card.Title className='mt-5 ps-5' style={{ fontSize: '50px', fontWeight: 'bold' }}>Education</Card.Title>
                                    </div>
                                    <Card.Text className='pt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='pe-4 pt-4' style={{ fontSize: '50px' }}>
                                                <FaUniversity />
                                            </div>
                                            <div>
                                                <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                                    C-P Application Development
                                                    <div>
                                                        2023 - 2024
                                                    </div>
                                                    IES Joan Coromines
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pt-5'>
                                            <div className='pe-4 pt-4' style={{ fontSize: '50px' }}>
                                                <FaUniversity />
                                            </div>
                                            <div>
                                                <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                                    Web Applications Development
                                                    <div>
                                                        2021 - 2023
                                                    </div>
                                                    Institut Montsià
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pt-5'>
                                            <div className='pe-4 pt-4' style={{ fontSize: '50px' }}>
                                                <FaUniversity />
                                            </div>
                                            <div>
                                                <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                                    Compulsory Secondary Education
                                                    <div>
                                                        2014 - 2019
                                                    </div>
                                                    Institut La Salle
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
            <Container className='d-flex justify-content-center align-items-center' style={{ height: 'auto' }}>
                <div className='d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginLeft: '0', marginTop: '10px', marginBottom: '50px' }}>
                        <div className='text-center'>
                            <div className='card-align'>
                                <Card.Body className='mt-3'>
                                    <div className='mytitle text-center'>
                                        <Card.Title className='mt-5 ps-5' style={{ fontSize: '50px', fontWeight: 'bold' }}>Experience</Card.Title>
                                    </div>
                                    <Card.Text className='pt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='pe-4 pt-4' style={{ fontSize: '50px' }}>
                                                <FaBuilding />
                                            </div>
                                            <div>
                                                <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                                    <a target='blank' href="https://pylon.market/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Pylon Data</a>
                                                    <div style={{ fontSize: '20px' }}>
                                                        2023 - 2024 (Internships)
                                                    </div>
                                                    <div className='pt-2 text-start text-justify' style={{ fontSize: '16px' }}>
                                                        <ul className="fixed-width">
                                                            <li>Solve web platform bugs.</li>
                                                            <li>Automate data collection.</li>
                                                            <li>Create custom user permissions.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pt-5'>
                                            <div className='pe-4 pt-4' style={{ fontSize: '50px' }}>
                                                <FaBuilding />
                                            </div>
                                            <div>
                                                <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                                    <a target='blank' href="https://www.empatica.net/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Empatica.net</a>
                                                    <div style={{ fontSize: '20px' }}>
                                                        2022 - 2023 (Internships)
                                                    </div>
                                                    <div className='pt-2 text-start text-justify' style={{ fontSize: '16px' }}>
                                                        <ul className="fixed-width">
                                                            <li>Maintenance of a VM web application.</li>
                                                            <li>Development of new functionalities.</li>
                                                            <li>Detect bugs and solve them.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pt-5'>
                                            <div className='pe-4 pt-4' style={{ fontSize: '50px' }}>
                                                <FaBuilding />
                                            </div>
                                            <div>
                                                <div className="text-justify" style={{ fontSize: '25px', margin: '0', marginTop: '5px' }}>
                                                    <a target='blank' href="https://aunclic.shop/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Estudio Web Doce</a>
                                                    <div style={{ fontSize: '20px' }}>
                                                        2020 - 2021 (Internships)
                                                    </div>
                                                    <div className='pt-2 text-start text-justify' style={{ fontSize: '16px' }}>
                                                        <ul className="fixed-width">
                                                            <li>WordPress design for clients.</li>
                                                            <li>Edit images with Photoshop or GIMP.</li>
                                                            <li>Migrate WP products to PrestaShop.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
            <div className='pb-2 mb-2'></div>
        </Navbar>
    );
}

export default Education;
