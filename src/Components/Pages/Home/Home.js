import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane, faMap } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
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
                            <Col xs={12} sm={12} md={6} lg={6} className='home-top-right-section'>
                              
                                    <h1>
                                        The Most Valuable Thing is Your Health</h1>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                         

                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        );
    }
}

export default Home;
