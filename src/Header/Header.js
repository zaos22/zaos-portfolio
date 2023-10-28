import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import logo from '../logo.png';
import axios from 'axios';
import { FaInstagram, FaGithub, FaShareAlt, FaLinkedin } from 'react-icons/fa';

function Header() {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetchMotivationalQuotes();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (quotes.length > 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
            }
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [quotes]);

    const fetchMotivationalQuotes = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuotes(response.data);
        } catch (error) {
            console.error('Error fetching motivational quotes:', error);
        }
    }

    useEffect(() => {
        if (quotes.length > 0) {
            setQuote(quotes[currentIndex]);
        }
    }, [currentIndex, quotes]);

    return (
        <Navbar expand="lg" className="headerbg1">
            <Container>
                <Navbar.Brand href="home">
                    <div className='App-logo'>
                        <img src={logo} alt="logo" width={'100px'} />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {quote && (
                            <div className='d-flex justify-content-between'>
                                <Nav.Link href="">"{quote.text}"</Nav.Link>
                                <Nav.Link href="">- {quote.author.split(',')[0] === 'type.fit' ? 'Anonymous' : quote.author.split(',')[0]}</Nav.Link>
                            </div>
                        )}
                    </Nav>
                    <nav className='mt-2'>
                    </nav>
                    <Nav className="d-flex align-items-center">
                        <div className="d-lg-none d-flex align-content-between">
                            <div className='pe-5'>
                                <Nav.Link href="#">
                                    <div className="social-icon">
                                        <FaInstagram />
                                    </div>
                                </Nav.Link>
                            </div>
                            <div className='pe-5'>
                                <Nav.Link href="#">
                                    <div className="social-icon">
                                        <FaGithub />
                                    </div>
                                </Nav.Link>
                            </div>
                            <Nav.Link href="#">
                                <div className="social-icon">
                                    <FaLinkedin />
                                </div>
                            </Nav.Link>
                        </div>
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        <Dropdown className="d-none d-lg-flex">
                            <Dropdown.Toggle as={Button} variant="link">
                                <FaShareAlt />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-center">
                                <Dropdown.Item href="#">
                                    <div className="social-icon">
                                        <FaInstagram />
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className="social-icon">
                                        <FaGithub />
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <div className="social-icon">
                                        <FaLinkedin />
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
