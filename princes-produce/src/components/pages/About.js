import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection.js';

import './css/About.css';
import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

import hero from './assets/about.jpg';
import { Container, Button, Row, Col } from 'react-bootstrap';

import Peter from './assets/peter.jpg'
import Max from './assets/max.jpg';
import Jiayi from './assets/jiayi.jpg';
import Dre from './assets/dre.jpg';

function PersonSection(props) {
    return (
        <div className="col-md mb-4 text-center">
            <img className="about-img" src={props.src}></img>
            <h4 className="mt-3">{props.name}</h4>
            <h5>{props.role}</h5>
            <p>{props.description}</p>
        </div>
    );
}

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
        <div className="head-hero">
            <HeroSection
            image={hero}
            height='100'
            filter='60'>
            </HeroSection>
            <div className='centered-child'>
            <h1 className="centered-title">About Us</h1>
            </div>
        </div>
        <div class="overdiv">
            <Container>
                <Row className="my-4">
                    <div className="col-md mb-4 text-center">
                        <h3 className="font-weight-bold">Huron BPA Chapter</h3>
                        <div className="mb-3">
                        This website was created proudly by the Website Design Team at the Ann Arbor Huron Chapter. With over 90 members, BPA is one of the largest clubs in the school. The Huron BPA Chapter recognizes the importance of sportsmanship within competitions and stresses the importance of community service. As a chapter, we pride ourselves in contributing to a passionate, diligent, and motivated community full of leaders and young scholars.  
                        </div>
                        <Button target="_blank" href="https://www.huronbpa.com/" variant="outline-success">Find out more</Button>
                    </div>
                </Row>
                <Row className="text-center mb-4">
                    <PersonSection
                        name="Peter Schwendeman"
                        src={Peter}
                        role="Main Programmer"
                        description=""
                    />
                    <PersonSection
                        name="Maxwell Rosales"
                        src={Max}
                        role="Project Manager & Programmer"
                        description=""
                    />
                    <PersonSection
                        name="Jiayi Hu"
                        src={Jiayi}
                        role="Content Manager"
                        description=""
                    />
                    <PersonSection
                        name="Dre Hubers"
                        src={Dre}
                        role="Content Manager"
                        description=""
                    />
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default About;