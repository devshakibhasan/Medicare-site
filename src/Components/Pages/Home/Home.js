import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane, faMap, faAmbulance, faStethoscope, faUserDoctor, faMapLocationDot, faSquareCheck, faArrowRight, faChevronRight, faPhone, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faFacebookF, faInstagram, faOptinMonster, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, InputGroup, Tab, Table, Card, CardGroup } from 'react-bootstrap';


import './Home.css';
import './Home2.css';
import { Button } from 'bootstrap';
import Header from '../../Shared/Header/Header';

class Home extends Component {

    render() {
        window.$(function () {
            // Owl Carousel
            var owl = window.$(".owl-carousel");
            owl.owlCarousel({
                items: 3,
                margin: 10,
                loop: true,
                nav: true,
                autoplay: true,
                autoplayHoverPause: true,

                smartSpeed: 300,
                responsive: {
                    0: {
                        items: 1
                    },

                    600: {
                        items: 2
                    },

                    1024: {
                        items: 3
                    },

                    1366: {
                        items: 3
                    },
                    1566: {
                        items: 3
                    }
                }
            });
        });


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
                                        <Form.Select aria-label="Default select example" className='form-select form-Select'>
                                            <option>Select Department</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        <button variant="outline-tab2ary" id="button-addon2">
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
                                <h1>Welcome to <span>Medicare</span></h1>
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
                <div className='home-ap-info'>
                    <Container>
                        <Row>
                            <Col md={6} lg={5} className='home-ap-info-left'>
                                <img src="https://i.ibb.co/WsrkM80/xabout-jpg-pagespeed-ic-Yd-ESj-G30x-H.webp" className='img-thumbnail' alt="" />            </Col>
                            <Col md={6} lg={6} className=' home-ap-info-right'>
                                <h3>We Are <span>Medicare</span>  A Healthcare Provider</h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <div className='home-ap-info-btn'>
                                    <button>Make an appointment</button>
                                    <div className='info-cont-btn'>
                                        <button >Contact us</button>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <section class="home-banner-first">
                    <Container>
                        <Row>
                            <Col md={4} lg={5}>

                            </Col>
                            <Col md={7} lg={6} className='home-banner-first-right'>
                                <h2>Your Health is Our Priority</h2> <br /> <br />
                                <p>We can manage your dream building A small river named Duden flows by their place</p>
                                <div className='home-banner-btn'>
                                    <button>Make an appointment</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className='home-dept'>
                    <h1>Medicare <span>Department</span> </h1>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={4} md={4} lg={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" /> <h3>Neurology</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab2">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" /> <h3>Ophthalmology</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" /> <h3>Nuclear Magnetic</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab4">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" />
                                                    <h3>  X-ray</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab5">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" /> <h3>Surgical</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab6">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" /> <h3>Cardiology</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab7">
                                                <div className='tabsNav'>
                                                    <img src="https://i.ibb.co/SBB1ZG2/doctor-Sign.png" alt="" /> <h3>Dental Clinic</h3>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={8} md={8} lg={9}>
                                    <Tab.Content className='tab-cntn'>

                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                <Col md={6} lg={4}>
                                                    <img src="https://i.ibb.co/F0gG9s1/xdept-1-jpg-pagespeed-ic-RSSq686th-P.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>Neurology</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <Row>
                                                <Col md={6} lg={4}>
                                                    <img src="https://i.ibb.co/rGC5hsT/xdept-2-jpg-pagespeed-ic-RSSq686th-P.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>
                                                        Ophthalmology</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            <Row>
                                                <Col md={6} lg={4}>
                                                    <img src="https://i.ibb.co/bXV6LD8/xdept-3-jpg-pagespeed-ic-RSSq686th-P.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>
                                                        Nuclear Magnetic</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab4">
                                            <Row>
                                                <Col md={6} lg={4}>
                                                    <img src="https://i.ibb.co/nQBNqCs/xdept-4-jpg-pagespeed-ic-RSSq686th-P.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>
                                                        X-ray</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab5">
                                            <Row>
                                                <Col md={6} lg={4}>
                                                    <img src="https://i.ibb.co/dj4bHQ1/xdept-5-jpg-pagespeed-ic-RSSq686th-P.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>
                                                        Surgical</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab6">
                                            <Row>
                                                <Col md={6} lg={4}>
                                                    <img src="https://i.ibb.co/dj4bHQ1/xdept-5-jpg-pagespeed-ic-RSSq686th-P.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>
                                                        Cardiology</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab7">
                                            <Row>
                                                <Col md={6} lg={4}>

                                                    <img src="https://i.ibb.co/GdhLXmP/xdept-7-jpg-pagespeed-ic-y904lm6-Gq.webp" className='img-thumbnail' alt="" />
                                                </Col>
                                                <Col md={6} lg={6}>
                                                    <h3>
                                                        Dental Clinic</h3>
                                                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                                    <p> The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon' /></div> She packed her seven versalia</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </div>



                <section className='Cards'>
                    <h1>Our Qualified Doctors</h1>

                    <Container fluid>
                        <Row xs={12} md={2} lg={4} className="g-5 ps-sm-5">

                            <Col>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/xdoc-1.jpg.pagespeed.ic.myvVwp80RP.webp" />
                                    <Card.Body>
                                        <Card.Title>Dr. Lloyd Wilson</Card.Title>
                                        <h6>NEUROLOGIST</h6>
                                        <Card.Text>
                                            I am an ambitious workaholic, but apart from that, pretty simple person.
                                        </Card.Text>
                                        <div className='card-content-icons d-flex justify-content-center'>
                                            <a href=""><FontAwesomeIcon icon={faFacebookF} className='card-content-icon' /></a>
                                            <a href=""> <FontAwesomeIcon icon={faTwitter} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faInstagram} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faDribbble} className='card-content-icon' /></a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/xdoc-2.jpg.pagespeed.ic.2QUsxWkZeQ.webp" />
                                    <Card.Body>
                                        <Card.Title>Dr. Rachel Parker</Card.Title>
                                        <h6>OPHTHALMOLOGIST</h6>
                                        <Card.Text>
                                            I am an ambitious workaholic, but apart from that, pretty simple person.
                                        </Card.Text>
                                        <div className='card-content-icons d-flex justify-content-center'>
                                            <a href=""><FontAwesomeIcon icon={faFacebookF} className='card-content-icon' /></a>
                                            <a href=""> <FontAwesomeIcon icon={faTwitter} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faInstagram} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faDribbble} className='card-content-icon' /></a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/xdoc-3.jpg.pagespeed.ic.2QUsxWkZeQ.webp" />
                                    <Card.Body>
                                        <Card.Title>Dr. Ian Smith</Card.Title>
                                        <h6>DENTIST</h6>
                                        <Card.Text>
                                            I am an ambitious workaholic, but apart from that, pretty simple person.
                                        </Card.Text>
                                        <div className='card-content-icons d-flex justify-content-center'>
                                            <a href=""><FontAwesomeIcon icon={faFacebookF} className='card-content-icon' /></a>
                                            <a href=""> <FontAwesomeIcon icon={faTwitter} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faInstagram} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faDribbble} className='card-content-icon' /></a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/xdoc-4.jpg.pagespeed.ic.2QUsxWkZeQ.webp" />
                                    <Card.Body>
                                        <Card.Title>Dr. Alicia Henderson</Card.Title>
                                        <h6>PEDIATRICIAN</h6>
                                        <Card.Text>
                                            I am an ambitious workaholic, but apart from that, pretty simple person.
                                        </Card.Text>
                                        <div className='card-content-icons d-flex justify-content-center'>
                                            <a href=""><FontAwesomeIcon icon={faFacebookF} className='card-content-icon' /></a>
                                            <a href=""> <FontAwesomeIcon icon={faTwitter} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faInstagram} className='card-content-icon' /></a>
                                            <a href=""><FontAwesomeIcon icon={faDribbble} className='card-content-icon' /></a>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Container>


                </section>

                <div className='banner-two'>
                    <section class="home-banner-second">
                        <Container>
                            <Row className='mb-2'>
                                <Col md={3} lg={3} >
                                    <div className='Colu p-4 mt-2 mb-2'>
                                        <h1>30</h1>
                                        <h4>YEARS OF EXPERIENCED</h4>
                                    </div>

                                </Col>
                                <Col md={3} lg={3} >
                                    <div className='Colu p-4 mt-2 mb-2'>
                                        <h1>4,500</h1>
                                        <h4>HAPPY PATIENTS</h4>
                                    </div>

                                </Col>
                                <Col md={3} lg={3} className='Col'>
                                    <div className='Colu p-4 mt-2 mb-2'>
                                        <h1>84</h1>
                                        <h4>NUMBER OF DOCTORS</h4>
                                    </div>

                                </Col>
                                <Col md={3} lg={3} className='Col'>
                                    <div className='Colu p-4 mt-2 mb-2'>
                                        <h1>300</h1>
                                        <h4>NUMBER OF STAFFS</h4>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </section>

                </div>

                <div className='Blogs '>
                    <h1>Latest Blog Updates</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Container fluid>
                        <Row className="g-5 ps-sm-5 d-flex justify-content-center">

                            <Col xs={12} sm={6} md={6} lg={3}>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/ximage_1.jpg.pagespeed.ic.fBamkg-o75.webp" />
                                    <Card.Body>
                                        <Card.Title>Scary Thing That You Don’t Get Enough Sleep</Card.Title>

                                        <Card.Text>
                                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                                            Scary Thing That You Don’t Get Enough Sleep....
                                        </Card.Text>
                                        <div className='card-content-button d-flex justify-content-center'>
                                            <button>Read More</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/xdoc-2.jpg.pagespeed.ic.2QUsxWkZeQ.webp" />
                                    <Card.Body>
                                        <Card.Title>Scary Thing That You Don’t Get Enough Sleep</Card.Title>

                                        <Card.Text>
                                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                                            Scary Thing That You Don’t Get Enough Sleep....
                                        </Card.Text>
                                        <div className='card-content-button d-flex justify-content-center'>
                                            <button>Read More</button>                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <Card className='Cardss'>
                                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/medex/images/xdoc-3.jpg.pagespeed.ic.2QUsxWkZeQ.webp" />
                                    <Card.Body>
                                        <Card.Title>Scary Thing That You Don’t Get Enough Sleep</Card.Title>

                                        <Card.Text>
                                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
                                            Scary Thing That You Don’t Get Enough Sleep....
                                        </Card.Text>
                                        <div className='card-content-button d-flex justify-content-center'>
                                            <button>Read More</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </Container>
                </div>


                <div className='slider'>

                    <div className=''>

                        <section class="Slider-content">
                            <p className='slider-heading1'>READ TESTIMONIALS</p>
                            <h2 className='slider-heading2'>Our Patient Says</h2>
                            <Container>
                                <div class="home-demo">

                                    <div class="owl-carousel owl-theme">

                                        <Col>
                                            <div class="item">
                                                <img src="https://i.ibb.co/25Ksgg4/blob.jpg" alt="" />

                                                <div>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                                                    <h4>Shakib Hasan</h4>
                                                    <h6>PATIENTS</h6>
                                                </div>

                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="item">


                                                <img src="https://preview.colorlib.com/theme/medex/images/xdoc-1.jpg.pagespeed.ic.myvVwp80RP.webp" alt="" />

                                                <div>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                                                    <h4>Shakib Hasan</h4>
                                                    <h6>PATIENTS</h6>
                                                </div>

                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="item">

                                                <img src="https://preview.colorlib.com/theme/medex/images/xdoc-1.jpg.pagespeed.ic.myvVwp80RP.webp" alt="" />

                                                <div>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                                                    <h4>Shakib Hasan</h4>
                                                    <h6>PATIENTS</h6>
                                                </div>

                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="item">


                                                <img src="https://preview.colorlib.com/theme/medex/images/xdoc-1.jpg.pagespeed.ic.myvVwp80RP.webp" alt="" />

                                                <div>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                                                    <h4>Shakib Hasan</h4>
                                                    <h6>PATIENTS</h6>
                                                </div>

                                            </div>
                                        </Col>

                                    </div>
                                </div>
                            </Container>
                        </section>
                    </div>
                </div>


                <div className='footer'>
                    <Container>
                        <Row>
                            <Col className='footer-cnt1' sm={12} md={6} lg={2}>
                                <div className='footer-cnt1'>
                                    <img src="https://i.ibb.co/8YZbPDY/Screenshot-13.png" alt="" />
                                    <p>Far far away, behind the word mountains, far from the countries.</p>
                                    <div>
                                        <a href=""><FontAwesomeIcon icon={faFacebookF} className='top-content-icon' /></a>
                                        <a href=""> <FontAwesomeIcon icon={faTwitter} className='top-content-icon' /></a>
                                        <a href=""><FontAwesomeIcon icon={faInstagram} className='top-content-icon' /></a>
                                        <a href=""><FontAwesomeIcon icon={faDribbble} className='top-content-icon' /></a>
                                    </div>
                                </div>


                            </Col>
                            <Col className='footer-cnt2' sm={12} md={6} lg={2}>
                                <h2>DEPARTMENTS</h2>
                                <div className='footer-link'>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Neurology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Ophthalmology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Nuclear Magnetic</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> X-Ray</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Surgical</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Cardiology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Dental</a>
                                </div>

                            </Col>
                            <Col className='footer-cnt3' sm={12} md={6} lg={2}>
                                <h2>LINKS</h2>
                                <div className='footer-link'>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Neurology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Ophthalmology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Nuclear Magnetic</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> X-Ray</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Surgical</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Cardiology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Dental</a>
                                </div>

                            </Col>
                            <Col className='footer-cnt4' sm={12} md={6} lg={2}>

                                <h2>SERVICES
                                </h2>
                                <div className='footer-link'>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Neurology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Ophthalmology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Nuclear Magnetic</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> X-Ray</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Surgical</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Cardiology</a>
                                    <a href=""><FontAwesomeIcon icon={faChevronRight} className='footer-content-icon' /> Dental</a>
                                </div>
                            </Col>
                            <Col className='footer-cnt5' sm={12} md={6} lg={2}>
                                <h2>HAVE A QUESTIONS?</h2>
                                <div className='footer-linkS'>
                                    <a href=""><FontAwesomeIcon icon={faLocationDot} className='footer-content-icon' /> <p>203 Fake St. Mountain View, San Francisco, California, USA</p> </a>
                                    <a href=""><FontAwesomeIcon icon={faPhone} className='footer-content-icon' /> <p>+2 392 3929 210</p>
                                    </a>
                                    <a href=""><FontAwesomeIcon icon={faPaperPlane} className='footer-content-icon' /> <p>	info@yourdomain.com</p></a>

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
