import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane, faMap, faAmbulance, faStethoscope, faUserDoctor, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faFacebookF, faInstagram, faOptinMonster, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, InputGroup } from 'react-bootstrap';
import './Home.css';
import { Button } from 'bootstrap';
import Header from '../../Shared/Header/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='home-top-section'>
                    <Container>
                        <Row >
                            <Col xs={12} sm={12} md={6} lg={6} className='text-center d-flex justify-content-start align-items-center'>

                            </Col>
                            <Col xs={12} sm={12} md={8} lg={6} className='home-top-right-section'>

                                <h1>
                                    The Most Valuable Thing is Your Health</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                <div className='selected-form'>

                                    {/* <div className='selecte-form'>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select Department</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className='booked-btnn'>
                                        <button>BOOK APPOINTMENT</button>
                                    </div> */}
                                    <InputGroup className="mb-3">
                                        <Form.Select aria-label="Default select example" className='form-select'>
                                            <option>Select Department</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        <button variant="outline-secondary" id="button-addon2">
                                            BOOK APPOINTMENT
                                        </button>
                                    </InputGroup>


                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='home-ap-section'>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={7} className='home-ap-left-section'>
                                <h1>Welcome to <span>Medex</span></h1>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <Row>
                                            <Col xs={2} sm={2} md={2} lg={2} className='home-ap-iconB'>
                                                <FontAwesomeIcon icon={faAmbulance} className='home-ap-icon' />

                                            </Col>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <h4>Emergency Help</h4>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <Row>
                                            <Col xs={2} sm={2} md={2} lg={2} className='home-ap-iconB'>
                                                <FontAwesomeIcon icon={faUserDoctor} className='home-ap-icon' />

                                            </Col>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <h4>Qualified Doctors</h4>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <Row>
                                            <Col xs={2} sm={2} md={2} lg={2} className='home-ap-iconB'>
                                                <FontAwesomeIcon icon={faMapLocationDot} className='home-ap-icon' />

                                            </Col>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <h4>Location and Directions</h4>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6}>
                                        <Row>
                                            <Col xs={2} sm={2} md={2} lg={2} className='home-ap-iconB'>
                                                <FontAwesomeIcon icon={faStethoscope} className='home-ap-icon' />

                                            </Col>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <h4>Medical Treatment</h4>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4} className='home-ap-form-section'>
                                <h3 className="pe-4 ps-4">APPOINTMENT FORM</h3>
                                <div xs={12} sm={12} md={6} lg={3}>
                                    <Form className='ap-form'>
                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicEmail">

                                            <Form.Control type="text" placeholder="Enter email" />

                                        </Form.Group>

                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicPassword">
                                            <Form.Select aria-label="Default select example" className='form-select'>
                                                <option>Select Department</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicPassword">
                                            <Form.Control type="date" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicPassword">
                                            <Form.Control type="time" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className=" mb-3 pe-4 ps-4" controlId="formBasicPassword">
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <button variant="primary" type="submit" className="pe-4 ps-4">BOOK APPOINTMENT
                                        </button>
                                    </Form>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        );
    }
}

export default Home;

