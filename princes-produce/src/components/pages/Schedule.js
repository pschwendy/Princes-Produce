/*
Schedule page
In-page iframe containing schedule - doesn't work well on mobile, so a link option is provided
*/
import React, { useState, useEffect, Component } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import '../css/main.css'

import hero from './assets/presentation-team.jpg'

function Schedule() {
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
                <h1 className="centered-title">Schedule</h1>
                </div>
            </div>
            <div className="scroll-body">
                <div className="container">
                    <HCitation citation="Belchonock. Business Training at Office. 2013. Deposit Photos, https://depositphotos.com/24655347/stock-photo-business-training-at-office.html"></HCitation>
                    <h2 className="heading">Tentative Schedule</h2>
                    <hr className="the-hr"></hr>
                    <p>You may also view the schedule <a target="_blank" href="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SOE-NLC-2021-TENTATIVE-10.01.20.pdf">here</a>.</p>
                    <div className="frame">
                        <iframe src="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SOE-NLC-2021-TENTATIVE-10.01.20.pdf"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;