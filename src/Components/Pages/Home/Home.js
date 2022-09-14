import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane, faMap, faAmbulance, faStethoscope, faUserDoctor, faMapLocationDot, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faFacebookF, faInstagram, faOptinMonster, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, InputGroup, Tab, Table } from 'react-bootstrap';
import './Home.css';
import './Home2.css';
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
                                <Col sm={3}>
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
                                <Col sm={9}>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
                                                                <td className='td'> <div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> The Big Oxmox advised her not to do so</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Far far away, behind the word mountains</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> Separated they live in Bookmarksgrove</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table bordered >
                                                        <tbody>
                                                            <tr>
                                                                <td className='td'><div><FontAwesomeIcon icon={faSquareCheck} className='tdIcon'/></div> She packed her seven versalia</td>
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
            </div>
        );
    }
}

export default Home;

// <img src="https://i.ibb.co/WsrkM80/xabout-jpg-pagespeed-ic-Yd-ESj-G30x-H.webp"
// <img src="https://i.ibb.co/GdhLXmP/xdept-7-jpg-pagespeed-ic-y904lm6-Gq.webp"

// <img src="https://i.ibb.co/dj4bHQ1/xdept-5-jpg-pagespeed-ic-RSSq686th-P.webp"

// <img src="https://i.ibb.co/nQBNqCs/xdept-4-jpg-pagespeed-ic-RSSq686th-P.webp"

// <img src="https://i.ibb.co/bXV6LD8/xdept-3-jpg-pagespeed-ic-RSSq686th-P.webp"

// <img src="https://i.ibb.co/rGC5hsT/xdept-2-jpg-pagespeed-ic-RSSq686th-P.webp"

// <img src="https://i.ibb.co/F0gG9s1/xdept-1-jpg-pagespeed-ic-RSSq686th-P.webp" 