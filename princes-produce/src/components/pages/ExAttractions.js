/*
Branching Attraction page 
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

import hero from './assets/attractions_hero.jpg';
import disney from './assets/disney_hero.jpg';
import ripleys from './assets/ripleys_card.jpg';
import universal from './assets/universal.jpg';
import seaworld from './assets/seaworld.jpg';
import icon from './assets/icon_park.jpg';
import museum from './assets/museum.jpg';
import chocolate from './assets/chocolate.webp';
import escape from './assets/escapology.jpg';
import iFly from './assets/iFly.jpg';
import kennedy from './assets/kennedy.jpg';
import andretti from './assets/andretti.jpg';
import science from './assets/science_center.jpg';

function ExAttractions(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image={hero}//'https://ewscripps.brightspotcdn.com/dims4/default/5302b3f/2147483647/strip/true/crop/0x0+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fwww.dontwasteyourmoney.com%2Fwp-content%2Fuploads%2F2019%2F07%2F611910256_walt-disney-world-e1563453095573.jpg'
                    height='100'
                    filter='60'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">Attractions</h1>
                </div>
            </div>
            <div className="scroll-body">
            <div className="container">
                <HCitation citation="Nell, Jacqueline. Walt Disney World Resort Celebrates 45th Anniversary to Colorful Fanfare. 2016. Florida News, https://www.wtxl.com/news/florida-news/on-this-day-in-history-walt-disney-world-opened-in-orlando" />
                <CardSection>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-disney">
                            <Card.Img variant="top" className="card-top food-image" src={disney} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Disney</Card.Title>
                                    <Card.Text>
                                    Featuring your favorite memories from childhood, experience the real Walt Disney World Magic.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Kinkade, Thomas. Main Street, USA Walt Disney World. 2014. Thomas Kinkade Studios, https://thomaskinkade.com/art/main-street-u-s-a-walt-disney-world/"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-universal">
                            <Card.Img variant="top" className="card-top food-image" src={universal} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Universal Studios</Card.Title>
                                    <Card.Text>
                                    Hop on the Hogwarts Express and go on a journey through the Islands of Adventure to Volcano Bay.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Bricker, Tom. Universal Studios Florida Entrance. 2014. Travel Caffeine, https://www.travelcaffeine.com/universal-orlando-summer-trip-report-part-1/"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-water-attractions">
                            <Card.Img variant="top" className="card-top food-image" src={seaworld} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Seaworld, Aquatica, Discovery Cove</Card.Title>
                                    <Card.Text>
                                    Journey to the mystical Atlantis or play with dolphins and other marine animals.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Little Inspiration. Orca Encounter. 2017. Little Inspiration, http://littleinspiration.com/wp-content/uploads/2017/06/img_6608.jpg"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-icon-park">
                            <Card.Img variant="top" className="card-top food-image" src={icon} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>ICON Park</Card.Title>
                                    <Card.Text>
                                    See Orlando from 400 feet above the air at The Wheel or get up and close with your favorite celebrities at Madame Tussaud’s.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="ICON Park Orlando. Up High. 2020. Icon Park Orlando, https://www.iconparkorlando.com/wp-content/uploads/185164_up_high1.jpg"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-ripleys">
                            <Card.Img variant="top" className="card-top food-image" src={ripleys} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Ripley’s Believe it or Not</Card.Title>
                                    <Card.Text>
                                    Indulge in the wonders of the world at Ripley’s and go on strange adventures.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Hyde, Stephen. Ripley's Believe it or Not. 2020. Day Out With The Kids, https://media.dayoutwiththekids.co.uk/media/12950/38231-ripleys-believe-it-or-not-london-09.jpg?mode=crop&width=1680&height=940"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-museum-of-art">
                            <Card.Img variant="top" className="card-top food-image" src={museum} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Orlando Museum of Art</Card.Title>
                                    <Card.Text>
                                    Explore the unique art and culture of Florida through both contemporary and history pieces.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Statom, Therman. Orlando Museum of Art. 2009. Therman Statom, https://thermanstatom.com/site/wp-content/uploads/2014/12/orlando-art-museum2.jpg"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-chocolate-kingdom">
                            <Card.Img variant="top" className="card-top food-image" src={chocolate} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Chocolate Kingdom: Interactive Factory Adventure Tour</Card.Title>
                                    <Card.Text>
                                    Follow along on a cocoa bean’s journey to become the decadent treat known as chocolate.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Expedia. Chocolate. 2020. Expedia, https://thumbnails.trvl-media.com/dtxTyWcWUaV8Ak9zL6txLOrDko0=/cdn.lemediavault.com/images/d0fbe092c5a36096b0a23f15257188de.jpeg"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-escape-game">
                            <Card.Img variant="top" className="card-top food-image" src={escape} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>The Escape Room Orlando</Card.Title>
                                    <Card.Text>
                                    Be the witty hero that works with your team to escape this puzzling chamber.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Escapology. Escape Rooms. 2015. Orlando Weekly, https://www.orlandoweekly.com/orlando/four-orlando-escape-rooms-worth-checking-out/Content?oid=2372599"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-ifly">
                            <Card.Img variant="top" className="card-top food-image" src={iFly} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>iFLY Orlando Indoor Skydiving</Card.Title>
                                    <Card.Text>
                                    Enjoy flying without worrying about falling down and dying. Get that adrenaline rush here at iFLY.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="iFLY Orlando. iFLY Orlando Dual Inside. 2015. Indoor Skydiving Source, https://www.indoorskydivingsource.com/wp-content/uploads/2015/11/ifly-orlando-dual-inside.jpg"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-kennedy-space-center">
                            <Card.Img variant="top" className="card-top food-image" src={kennedy} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Kennedy Space Center</Card.Title>
                                    <Card.Text>
                                    Start your very own quest through space and travel the galaxy like an astronaut.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Kennedy Space Center. Rocket Garden at the Kennedy Space Center Visitor. 2020. Kennedy Space Center, https://www.kennedyspacecenter.com/explore-attractions/heroes-and-legends/rocket-garden"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-indoor-karting">
                            <Card.Img variant="top" className="card-top food-image" src={andretti} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Andretti Indoor Karting & Games</Card.Title>
                                    <Card.Text>
                                    Experience the thrill of racing through one of the world’s longest indoor tracks.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Andretti Karting. Andretti Indoor Karting Games Orlando Racing. 2020. Orlando Informer, https://orlandoinformer.com/wp-content/uploads/2020/04/Andretti-Indoor-Karting-Games-Orlando-racing-1024x684.jpg"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-attractions-science-center">
                            <Card.Img variant="top" className="card-top food-image" src={science} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Orlando Science Center</Card.Title>
                                    <Card.Text>
                                    Explore the different exhibits that are meant to spark your curiosity in science such as DinoDigs and Our Planet.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Orlando Science Center. Orlando Science Center OSC Front. 2013. Today's Orlando, http://www.todaysorlando.com/thing-to-do/orlando-science-center"></CardCitation>
                        </a>
                    </Card>
                </CardSection>
            </div>
            </div>
        </div>
    );
}

export default ExAttractions;