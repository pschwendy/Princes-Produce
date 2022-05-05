/* 
Disney Attraction Page
This is not templated due to being slightly different then the other attraction pages.
*/

import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

import hero from './assets/disney_hero.jpg';

function DisneyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
        <div className="head-hero">
            <HeroSection
            image={hero}//'https://i.ytimg.com/vi/mOtp_w1BDDA/maxresdefault.jpg'
            height='100'
            filter='50'>
            </HeroSection>
            <div className='centered-child'>
            <h1 className="centered-title">Disney</h1>
            </div>
        </div>
        <div class="overdiv">
            <div class="container mx-auto">
                <HCitation citation="Kinkade, Thomas. Main Street, USA Walt Disney World. 2014. Thomas Kinkade Studios, https://thomaskinkade.com/art/main-street-u-s-a-walt-disney-world/"></HCitation>
                <div class="alt-1"> 
                    <h2 className="heading">Disney’s Magic Kingdom</h2>
                    <hr className="the-hr"></hr>
                      <div class="row article">
                          <div class="col-md mr-3">
                              <div class="right-div">
                                    <p class="left-justified">At Disney’s Magic Kingdom, characters are waiting to meet you as you enter the park. There are six diverse sections including Adventureland, Tommorowland and more! Your favorite Disney princesses and Mickey Mouse characters are located all throughout the park with their own themed rides and attractions built for a subversive Disney experience. A wide selection of food can be found at any of the many themed restaurants like Gaston’s Tavern and Cosmic Ray’s Starlight Cafe.</p>
                                    <p>Hours: </p>
                                    <ul>
                                        <li>
                                        Most days, 9:00am - 6:00pm 
                                        </li>
                                    </ul>
                                    <p>Pricing: </p>
                                    <ul>
                                        <li>
                                        $170 for a one day ticket 
                                        </li>
                                    </ul>
                                    <p>Security Restrictions: </p>
                                    <ul>
                                        <li>Trained Service Animals are permitted in all Disney parks and resorts, but other pets are only permitted in pet-friendly resorts.</li>
                                        <li>Every bag, person, or suitcase is subject to screenings and security checks.</li>
                                        <li>Guests must wear masks and have a temperature lower that 100.4°F</li>
                                        <li><a target="_blank" href="https://disneyworld.disney.go.com/park-rules/">More Information</a></li>
                                    </ul>
                              </div>
                          </div>
                          <div class="col">
                              <img src="https://business.time.com/wp-content/uploads/sites/2/2012/09/disneyworld1.jpg?w=600&h=400&crop=1" className="img-fluid article-image img-disney"></img>
                              <ArticleCitation citation="Universal Orlando Resort. Explore the streets of Diagon Alley at Universal Studios Florida. 2020. Visit Florida, https://www.visitflorida.com/en-us/things-to-do/attractions/experience-diagon-alley-universal-studios.html"></ArticleCitation>
                          </div>
                      </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Disney’s Epcot</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/18/ce/92/35/spaceship-earth-at-epcot.jpg" className="img-fluid article-image img-disney"></img>
                            <ArticleCitation citation="Tripadvisor Management. Spaceship Earth at Epcot. 2019. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34515-d126541-Reviews-Epcot-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=416191029"></ArticleCitation>
                        </div>
                        <div class="col">
                            <div class="right-div">
                                    <p class="left-justified">The Experimental Prototype Community of Tomorrow (Epcot) features rides that throw you right in the middle of France or under the sea! Consists of Future World on one side, full of space and nautical travels, and 11 pavilions each themed to different countries from Norway to China, let your imagination roam through countless possibilities! Visit Arendelle aboard a Viking boat or go aboard a spaceship and explore your role as an astronaut on Missions: SPACE. Immerse yourself in different cultures in boat rides around the place!</p>
                                    <p>Hours: </p>
                                    <ul>
                                        <li>
                                        Most days, 10:00am - 9:00pm 
                                        </li>
                                    </ul>
                                    <p>Pricing: </p>
                                    <ul>
                                        <li>
                                        $109 (ticket prices may vary based on when you visit)
                                        </li>
                                    </ul>
                                    <p>Security Restrictions: </p>
                                    <ul>
                                        <li>Trained Service Animals are permitted in all Disney parks and resorts, but other pets are only permitted in pet-friendly resorts.</li>
                                        <li>Every bag, person, or suitcase is subject to screenings and security checks.</li>
                                        <li>Guests must wear masks and have a temperature lower that 100.4°F</li>
                                        <li><a target="_blank" href="https://disneyworld.disney.go.com/park-rules/">More Information</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DisneyPage;