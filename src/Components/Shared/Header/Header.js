import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane, faMap } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='top-content'>
                    <Container>
                        <Row >
                            <Col xs={12} sm={12} md={6} lg={8} className=''>
                                <Row>
                                    <Col xs={12} sm={6} md={6} lg={4} className='top-content-left text-center d-flex justify-content-start'>
                                        <FontAwesomeIcon icon={faPaperPlane} className='top-content-mail-icon ' />
                                        <p>youremail@email.com</p>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={4} className='d-flex justify-content-start'>
                                        <a href=""><FontAwesomeIcon icon={faFacebookF} className='top-content-icon' /></a>
                                        <a href=""> <FontAwesomeIcon icon={faTwitter} className='top-content-icon' /></a>
                                        <a href=""><FontAwesomeIcon icon={faInstagram} className='top-content-icon' /></a>
                                        <a href=""><FontAwesomeIcon icon={faDribbble} className='top-content-icon' /></a>
                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4} className=' text-center d-flex justify-content-center'>

                                <button className='booked-btn' size="lg">Book An Appointment</button>

                            </Col>

                        </Row>
                    </Container>
                </div>
                <div className='top-content-middle'>
                    <Container>
                        <Row >
                            <Col xs={12} sm={12} md={4} lg={4} className='logo  d-flex justify-content-start align-items-center'>
                                <a href="/"><img src="https://i.ibb.co/8YZbPDY/Screenshot-13.png" alt="" /></a>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} className=' text-center d-flex justify-content-start align-items-center'>
                                <Row>
                                    <Col xs={2} sm={2} md={2} lg={2} className=' text-center d-flex justify-content-center '>
                                        <FontAwesomeIcon icon={faMap} className='top-content-middle-icon' />
                                    </Col>
                                    <Col xs={10} sm={10} md={10} lg={10} >
                                        <p className=' text-center d-flex justify-content-start'><span>Free Call</span> <strong>+1 234 456 78910</strong>  </p>
                                        <p className=' text-center d-flex justify-content-start'>Call Us Now 24/7 Customer Support</p>

                                    </Col>
                                </Row>


                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} className=' text-center d-flex justify-content-start align-items-center'>

                                <Row>
                                    <Col xs={2} sm={2} md={2} lg={2} className=' text-center d-flex justify-content-center'>
                                        <FontAwesomeIcon icon={faPaperPlane} className='top-content-middle-icon' />
                                    </Col>
                                    <Col xs={10} sm={10} md={10} lg={10} >
                                        <p className=' text-center d-flex justify-content-start'><strong> Our Location</strong></p>
                                        <p className='  d-flex justify-content-start'>198 West 21th Street, Suite 721 New York </p>
                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                    </Container>
                </div>
                <div className='navBar '>
              
               
                        <Navbar expand="lg" variant="dark" className=' mx-auto'>
                      
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Container>
                                <Nav
                                    className="me-auto "

                                    navbarScroll
                                    defaultActiveKey="/">
                                    <Nav.Item>
                                        <Nav.Link href="/" >HOME</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#action2">ABOUT</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#f">SERVICES</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#t">DOCTORS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#h">DEPARTMENTS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#y">PRICING</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#r">GALLERY</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#w">BLOG</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#i">CONTACT</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                                </Container>
                            </Navbar.Collapse>
                        
                        </Navbar>
                   
                   
                </div>



            </div>
        );
    }
}

export default Header;
