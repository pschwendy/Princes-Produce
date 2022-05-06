/*
Branching Attraction page 
Contains cards which branch to templated pages
*/

import React, { useState, useEffect, Component } from 'react';
import {
  Card, Tab, Col, Row, Container, Nav, Button
} from 'react-bootstrap';
import HeroSection from '../HeroSection.js';
import CardSection from '../CardSection.js';
import HCitation from '../HCitation';
import CardCitation from '../CardCitation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBoxOpen, faBoxes, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import './css/ExFood.css';
import bpalogo from './assets/logo-transparent.png';

import MealKitCard from '../MealKitCard.js';

function Produce(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            
            <div className="scroll-body" style={{background: 'rgb(0, 74, 173)'}}>
                <div className="center-parent produce-scroll" style={{height: '100vh'}}>
                    <div className='centered-div'>
                        <h1 className='heading' style={{color: 'white'}}>Browse Our Packages</h1>
                        <p style={{color: 'white', textAlign: 'center'}}>Select the plan that's right for you and customize your perfect produce package!</p>
                        <div className="center-parent" style={{height: '60vh'}}>
                            <Card id="selectionCard">
                                <Card.Body className="meal-kit-body">
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav variant="pills" className="flex-row">
                                            <Nav.Item>
                                                <Nav.Link className="select-size"  eventKey="first">Small</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="select-size"  eventKey="second">Medium</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="select-size" eventKey="third">Large</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <hr></hr>
                                        <Row>
                                            <Col>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                        <Row>
                                                            <Col sm={4} style={{display: 'grid', alignItems: 'center', margin: 'auto'}}>
                                                                <FontAwesomeIcon style={{margin: 'auto'}} size = '8x' icon={faBox} />
                                                            </Col>
                                                            <Col sm={8} >
                                                                <h1 style={{textAlign: 'left', color: 'rgb(84, 84, 84)', fontWeight: '700'}}>SMALL</h1>            
                                                                <ul style={{textAlign: 'left'}}>
                                                                    <li className='des-bullet'>$12</li>
                                                                    <li className='des-bullet'>Can hold up to 7 items</li>
                                                                </ul>
                                                                <div className="center-parent" width='100%'>
                                                                    <Button style={{width: '100% !important'}} className="sel" variant="success">SELECT PRODUCE</Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <Row>
                                                            <Col sm={4} style={{display: 'grid', alignItems: 'center', margin: 'auto'}}>
                                                                <FontAwesomeIcon style={{margin: 'auto'}} size = '8x' icon={faBoxOpen} />
                                                            </Col>
                                                            <Col sm={8} >
                                                                <h1 style={{textAlign: 'left', color: 'rgb(84, 84, 84)', fontWeight: '700'}}>MEDIUM</h1>            
                                                                <ul style={{textAlign: 'left'}}>
                                                                    <li className='des-bullet'>$25</li>
                                                                    <li className='des-bullet'>Can hold up to 15 items</li>
                                                                </ul>
                                                                <div className="center-parent" width='100%'>
                                                                    <Button style={{width: '100% !important'}} className="sel" variant="success">SELECT PRODUCE</Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="third">
                                                        <Row>
                                                            <Col sm={4} style={{display: 'grid', alignItems: 'center', margin: 'auto', textAlign: 'center'}}>
                                                                <FontAwesomeIcon style={{margin: 'auto'}} size = '8x' icon={faBoxes} />
                                                            </Col>
                                                            <Col sm={8} >
                                                                <h1 style={{textAlign: 'left', color: 'rgb(84, 84, 84)', fontWeight: '700'}}>LARGE</h1>            
                                                                <ul style={{textAlign: 'left'}}>
                                                                    <li className='des-bullet'>$40</li>
                                                                    <li className='des-bullet'>Can hold up to 25 items</li>
                                                                </ul>
                                                                <div className="center-parent" width='100%'>
                                                                    <Button style={{width: '100% !important'}} className="sel" variant="success">SELECT PRODUCE</Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Produce;