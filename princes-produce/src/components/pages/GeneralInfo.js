/*
General Info page
Gives general info about convention, dress attire, and other NLC things
*/

import React, { useState, useEffect } from 'react';
import {
  Button,
} from 'react-bootstrap';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import hero from './assets/general_info_hero.jpg';

function GeneralInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                            image={hero}
                            height='100'
                            filter='60'>
                </HeroSection>
                <div className='centered-child'>
                    <h1 className='centered-title'>General Info</h1>
                </div>
            </div>
            <div class="overdiv-2">
                <div class="container mx-auto">
                    <HCitation citation="Picture Citation: Oklahoma BPA. Something I Learned at BPA/DECA FLC. 2018. Oklahoma BPA, https://bpaok.org/2018/12/03/something-i-learned-at-oklahoma-bpa-deca-fall-leadership-conference-2018/"></HCitation>
                    <div class="alt-1"> 
                        <h2 className="heading">Preparation</h2>
                        <hr className="the-hr"></hr>
                        <h4>Registering for NLC</h4>
                        <p>
                        The 2021 NLC will be held from May 5, 2021 to May 9, 2021.  To register for this event, you must use the Online Registration System, which is accessible from your web browser. The username and password are the same as the ones that you used to register your members. Registration officially opens on February 28, 2021.
                        </p>
                        <h4>Hotel Reservations</h4>
                        <p>
                        Conference members are required to stay at Disney’s Coronado Springs Resort or Disney’s Yacht Club Resort. The reservation process will also take place using BPA’s Online Registration System. The deadline to reserve a hotel is April 1, 2021. Prior to that, feel free to contact Jonathan Smith, <a href="mailto:jsmith@bpa.org">jsmith@bpa.org</a>, with any inquiries you may have.
                        </p>
                        <p>
                        <a href="#/hotels">
                            <Button variant="outline-info">Learn about the Hotel Options</Button>
                        </a>
                        </p>
                        <h4>Payments</h4>
                        <p>
                        Payments must be received by April 14, 2021 at the National Center. They are accepted in forms of credit cards, checks, or purchase orders.
                        </p>
                        <p>
                        If you wish to mail your payment, please address the invoice to:
                        </p>
                        <ul>
                        <p>Business Professionals of America, Inc.</p>
                        <p>National Center P.O. Box 729</p>
                        <p>Westerville, OH 43086</p>
                        </ul>
                        <p>
                        If you wish to fax either your credit card payment or your purchase order, please send it to <a href="javascript:void(0)" onclick="return false;">(614) 895-1165</a>.
                        </p>
                        <p>
                        If you wish to call in your payment, please dial <a href="javascript:void(0)" onclick="return false;">(614) 895-7277</a>. Please note that it must be a credit card payment if you wish to pay by phone.
                        </p>
                        <h2 className="heading">Dress Code</h2>
                        <hr className="the-hr"></hr>
                        <p>
                        To maintain a professional atmosphere, all students, chaperones, and advisors are required to follow the dress code throughout the National Leadership Conference.
                        </p>
                        <ul>
                            <li>
                            Members must follow dress code to participate in sessions, to compete in events, and to walk on stage.
                            </li>
                            <li>
                            Members wearing inappropriate attire may change clothes and return to their event, but will not be given extra time to make up for time missed.
                            </li>
                            <li>
                            Members may issue a grievance of the Dress Code Policy after being stopped from competing in an event. This grievance must be received in writing by the events headquarters within 15 minutes of the incident.
                            </li>
                        </ul>
                        <div class="row mt-3 article">
                            <div class="col-md mr-3">
                                <div class="right-div">
                                    <h4>Professional Dress Code</h4>
                                    <p>This is <b>required</b> for General Sessions, all competitive events, Caucuses, Campaign Rally, Workshops, and National Leadership Academy</p>
                                    <p>
                                        <b>Men:</b>
                                    </p>
                                    <ul>
                                        <li>No denim permitted</li>
                                        <li>Dress slacks, dress shirts, and tie</li>
                                        <li>Suit, dress shirt, and tie</li>
                                        <li>Sport coat, dress slacks, dress shirt, and tie</li>
                                        <li>BPA blazer, dress slacks, dress shirt, and tie</li>
                                    </ul>
                                    <p>
                                        <b>Women:</b>
                                    </p>
                                    <ul>
                                        <li>Required: dress shoes with dress socks or dress sandals with heel</li>
                                        <li>Skirt length must reach at least two inches above the top of the knee</li>
                                        <li>No denim permitted</li>
                                        <li>Pant or skirt suit</li>
                                        <li>Dress skirt/slacks with blouse/sweater</li>
                                        <li>BPA blazer, dress skirt/slacks, with blouse/sweater</li>
                                    </ul>
                                </div> 
                            </div>
                            <div class="col">
                                <img src="https://www.huronbpa.com/uploads/1/2/2/4/122481140/img-0553_orig.jpg" className="img-fluid article-image cropped-500"></img>
                                <ArticleCitation citation="Huron BPA. Nathan Lee and Anay Laddha on Stage, 2019. Huron BPA, https://www.huronbpa.com/"></ArticleCitation>
                            </div>
                        </div>
                        <div class="row mt-3 article">
                            <div class="col-md">
                                <img src="https://www.huronbpa.com/uploads/1/2/2/4/122481140/dsc-0614_orig.jpg" className="img-fluid article-image cropped-500"></img>
                                <ArticleCitation citation="Huron BPA. People at BPA. 2019. Huron BPA, https://www.huronbpa.com/"></ArticleCitation>
                            </div>
                            <div class="col-md mr-3">
                                <div class="right-div">
                                    <h4>Casual Dress Code</h4>
                                    <p>This is required for Tours, Special Events, and Exhibit Hall</p>
                                    <ul>
                                        <li>Required: Footwear</li>
                                        <li>Denim permitted</li>
                                        <li>Sportswear, pants, and shirt</li>
                                        <li>T-shirt and shorts</li>
                                    </ul>
                                    <h4>Unacceptable Attire</h4>
                                    <ul>
                                        <li>Shirts that are strapless, have spaghetti straps, have a halter top, and show midriff</li>
                                        <li>Spandex and other transparent clothing</li>
                                        <li>Any clothing with cut-offs or rips</li>
                                        <li>Clothing with inappropriate pictures or words</li>
                                        <li>Wearing swimsuits without appropriate attire on top when not at the pool</li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                        <h2 className="heading">BPA Day of Service</h2>
                        <hr className="the-hr"></hr>
                        <p>Join BPA in impacting communities both locally and nationally. Some options you should consider participating in:</p>
                        <ul>
                            <li className="mb-2"><b>A Million Thanks:</b>
                            <ul><li>Write a card or a letter to military members and thank them for their service</li></ul>
                            </li>
                            
                            <li className="mb-2"><b>A Smile a Day Thank You Cards:</b>
                            <ul><li>Create a thank-you card that recognizes the efforts of all those that made your trip a success</li></ul>
                            </li>
                            
                            <li className="mb-2"><b>BPA Cares School Supply Drive:</b>
                            <ul><li>Bring some school supplies such as pencils, crayons, notebooks, and donate it to those in need</li></ul>
                            </li>
                            
                            <li className="mb-2"><b>Walk for Special Olympics Posters:</b>
                            <ul><li>Encourage people along the course of the walk through motivating posters and signs</li></ul>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralInfo;