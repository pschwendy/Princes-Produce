/*
Branching sightseeing page 
Contains cards which branch to templated pages
*/

import React, { useState, useEffect, Component } from 'react';
import {
  Card
} from 'react-bootstrap';
import HeroSection from '../HeroSection.js';
import CardSection from '../CardSection.js';
import HCitation from '../HCitation';
import CardCitation from '../CardCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import './css/ExFood.css';

import hero from './assets/sightseeing_hero.jpg';
import harry from './assets/harry_card.jpg';
import winterBoat from './assets/winter_boat.jpg';
import adventure from './assets/florida_adventure.jpg';
import botanical from './assets/botanic.jpg';
import exoticAnimals from './assets/exotic_animals_card.jpg';

function ExSightseeing(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image={hero}//'https://www.onetravel.com/going-places/wp-content/uploads/2011/09/Orlando-Attractions.jpg'
                    height='100'
                    filter='60'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">Sightseeing</h1>
                </div>
            </div>
            <div className="scroll-body">
            <div className="container">
                <HCitation citation="The Wow Style. Beautiful Nature Images. 2018. The Wow Style, https://www.thewowstyle.com/beautiful-nature-images-free-to-download/"></HCitation>
                <CardSection>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-harry-p-leu-gardens">
                            <Card.Img variant="top" className="card-top food-image" src={harry} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Harry P. Leu Gardens</strong></Card.Title>
                                    <Card.Text>
                                        Explore the scenic paths at Leu Gardens.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="O., Crystal. Kopsia Fruticosa at Harry P. Leu Gardens. 2020. Yelp. https://www.yelp.com/biz_photos/harry-p-leu-gardens-orlando?select=iRcHiY53ct5yNZefZEJUgg" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-florida-tours">
                            <Card.Img variant="top" className="card-top food-image" src={adventure} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Florida Dolphin Tours/Florida Adventure Tour</strong></Card.Title>
                                    <Card.Text>
                                        Take an expert-led boat ride into Florida's beautiful wilderness.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Florida Dolphin Tours. Swim With Manatees Excursion. 2014. Yelp, https://www.yelp.com/biz_photos/florida-dolphin-tours-orlando?select=WRLaECUSy96v5Wx-4fOOpA" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-tibet-butler-preserve">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/zKmHO2-EEbP0pV-ePEn0CA/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Tibet-Butler Preserve</strong></Card.Title>
                                    <Card.Text>
                                        Take a breathtaking hike in the Tibet-Butler Preserve.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="D., Mark. Tibet-Butler Preserve Boardwalk. 2017. Yelp. https://www.yelp.com/biz_photos/tibet-butler-preserve-orlando?select=zKmHO2-EEbP0pV-ePEn0CA" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-lake-eola-park">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/cz5fhi4pJQinInQLZC_kVg/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Lake Eola Park</strong></Card.Title>
                                    <Card.Text>
                                        Adventure into Lake Eola Park and enjoy an amazing view of the city.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="L., Angel. Lake Eola Park at Night. 2020. Yelp, https://www.yelp.com/biz_photos/lake-eola-park-orlando?select=X4_FuDHfq0lVYj1UHM1-tA" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-exotic-animals">
                            <Card.Img variant="top" className="card-top food-image" src={exoticAnimals} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Exotic Animal Experience</strong></Card.Title>
                                    <Card.Text>
                                        Meet and greet the endangered, exotic animals in this privately-owned zoo.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="G., Junebug. Flamingos. 2018. Yelp. https://www.yelp.com/biz_photos/detroit-zoo-royal-oak?select=L4CrtH5PTrqsTPy0pWIGIw." />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-butler-chain-lakes">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.orangeobserver.com/sites/default/files/styles/sliders_and_planned_story_image_870x580/public/51706_standard.jpeg?itok=5xRCGbjd" />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Butler Chain of Lakes</strong></Card.Title>
                                    <Card.Text>
                                        View the Butler Chain of Lakes' awe-inspiring beauty.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Nesslar, Jennifer. Lake Tibet-Butler. 2016. Orange Observer, https://www.orangeobserver.com/photo-gallery/final-piece-butler-chain-lakes#photo-5" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-kissimmee-swamp-tours">
                            <Card.Img variant="top" className="card-top food-image" src="https://media-cdn.tripadvisor.com/media/photo-w/18/3d/d9/37/kissimmee-swamp-tours.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Kissimmee Swamp Tours</strong></Card.Title>
                                    <Card.Text>
                                        Tour the Kissimee Swamp and look at the unique wildlife outside of Orlando.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="M., Peter. Schitterende Airboatride. 2019. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34337-d677214-Reviews-Kissimmee_Swamp_Tours-Kenansville_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=406706487" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-winter-park-boat-tour">
                            <Card.Img variant="top" className="card-top food-image" src={winterBoat} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Winter Park Scenic Boat Tour</strong></Card.Title>
                                    <Card.Text>
                                        Relax in a tranquil cruise through Winter Park.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Around Orlando Tours. Cruise Through Winter Park Chain of Lakes. 2020. Around Orlando Tours, https://aroundorlandotours.com/winter-park-orlando-tou" />
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-sightseeing-wildlife-attractions">
                            <Card.Img variant="top" className="card-top food-image" src={botanical} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title><strong>Central Florida Zoo and Botanical Gardens</strong></Card.Title>
                                    <Card.Text>
                                        Encounter amazing wildlife in these attractions.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                </CardSection>
            </div>
            </div>
        </div>
    );
}

export default ExSightseeing;