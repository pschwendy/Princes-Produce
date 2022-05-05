/*
Citations page
In-page iframe containing citations - doesn't work well on mobile, so a link option is provided
*/
import React, { useState, useEffect, Component } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import '../css/main.css'

import hero from './assets/citations.webp';
import worksCited from './assets/works-cited.pdf';

function Citations() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                image={hero}
                height='100'
                filter='50'>
                </HeroSection>
                <div className='centered-child'>
                <h1 className="centered-title">Citations</h1>
                </div>
            </div>
            <div className="scroll-body">
                <div className="container">
                    <HCitation citation="Hyatt Regency Orlando. Orlando Hotel. 2021. Hyatt Regency Orlando, https://www.hyatt.com/en-US/hotel/florida/hyatt-regency-orlando/mcoro"></HCitation>
                    <h2 className="heading">Works Cited</h2>
                    <hr className="the-hr"></hr>
                    <p>You may also view the citations <a target="_blank" href="https://drive.google.com/file/d/1Ks74UVT3DGKG2qkYj8jX01AfKS_KFgXP/view?usp=sharing">here</a>.</p>
                    <div className="frame">
                        <iframe src={worksCited}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Citations;