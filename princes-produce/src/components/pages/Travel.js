/*
Travel options page
Simple alternating article
*/

import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import travelOptionsRide from './assets/travel_options_ride.jpg';
import hero from './assets/travel_options_hero.jpg';
import airplane from './assets/travel_options_airplane.jpg';


function Travel() {
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
                    <h1 className='centered-title'>Travel</h1>
                </div>
            </div>
            <div class="overdiv">
                <div class="container mx-auto">
                    <HCitation citation="Stock photo: credit to jag_cz https://www.shutterstock.com/image-photo/passengers-commercial-airplane-flying-above-clouds-1568946955"></HCitation>
                    <div class="alt-1"> 
                        <h2 className="heading">Getting There by Plane</h2>
                        <hr className="the-hr"></hr>
                        <div class="row article">
                            <div class="col-md mr-3">
                                <div class="right-div">
                                    <p class="left-justified">Discounted airline tickets are available upon flying with Delta Air Lines, American Airlines, or United Airlines. Please note that this discount is only available for service to Orlando International Airport (MCO).</p>
                                    <p><b>Delta Air Lines</b></p>
                                    <ul>
                                        <li>Visit <a target="_blank" href="https://www.delta.com/">their website</a> to book your flights and input the discount code <b>NMUK2</b> in the Meeting Code box.</li>
                                        <li>You may also call <a href="javascript:void(0)" onclick="return false;">(800) 328-1111</a> and reference the code <b>NMUK2.</b> They are available Monday through Friday from 7:00am-7:30pm (CT)</li>
                                    </ul>
                                    <p><b>American Airlines</b></p>
                                    <ul>
                                        <li>Visit <a target="_blank" href="https://www.aa.com/homePage.do">their website</a> to book your flights and input the discount code <b>1541EQ</b> in the Promotions Code box.</li>
                                        <li>You may also call <a href="javascript:void(0)" onclick="return false;">(800) 433-1790</a> and reference the authorization number <b>1541EQ.</b> They are available Monday through Friday from 7:00am-11:00pm (CT) and Saturday and Sunday from 7:00am-8:00pm (CT)</li>
                                    </ul>
                                    <p><b>United Airlines</b></p>
                                    <ul>
                                        <li>Visit <a target="_blank" href="https://www.united.com/en/us">their website</a> to book your flights and input the discount code <b>ZJU2646393</b> in the Promotions and Certificates box.</li>
                                        <li>You may also call <a href="javascript:void(0)" onclick="return false;">(800) 426-1122</a> and reference the Z code <b>ZJU2646393</b>. They are available Monday through Friday from 7:00am-9:00pm (CT) and Saturday and Sunday from 7:00am-5:00pm (CT)</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <img src={airplane} className="img-fluid article-image"></img>
                                <ArticleCitation citation="Fotolia, Eray. Aeroplane. 2016. Encyclopedia Britannica, https://www.britannica.com/list/7-puzzling-plane-disappearances" />
                            </div>
                        </div>
                    </div>
                    <div class="alt-1"> 
                        <h2 className="heading">Other Options</h2>
                        <hr className="the-hr"></hr>
                        <div class="row article">
                            <div class="col-md mr-3">
                                <img src={travelOptionsRide} className="img-fluid article-image"></img>
                                <ArticleCitation citation="Mears Transportation Group. Orlando Shared Ride Shuttle Vans. 2019. Yelp. https://www.yelp.com/biz_photos/mears-transportation-group-orlando-3?select=QEeNWpnv_GelCUlYMzGF8A" />
                            </div>
                            <div class="col">
                                <div class="right-div">
                                    <h4>Airport Shuttle</h4>
                                    <p>
                                    Disney’s resorts offer a free shuttle service to everyone who has already booked and confirmed their stay at the hotel. Reservations are required before arriving to use this service. You may <a target="_blank" href="https://secure.reservations.disney.go.com/ibcwdw/en_US/dme/dmeform">book online</a> or call <a href="javascript:void(0)" onclick="return false;">(407) 939-1936.</a> Please note that you will be asked for your flight information and the confirmed hotel reservation. Do not book until you have already received confirmation from the two resorts, which will not happen until April 8, 2021.
                                    </p>
                                    <h4>Car Rental</h4>
                                    <p>
                                    <a target="_blank" href="https://www.avis.com/en/home">Avis</a> offers discounts for BPA members through a partnership with the organization. Use the code <b>AWD# J659563</b> when renting to access benefits and discounts.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;