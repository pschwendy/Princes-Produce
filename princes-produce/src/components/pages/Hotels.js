/*
Hotel Page
Uses states to create the option of reading about one hotel or the other (through clickable buttons)
Info page which links to recreation and food options article for each hotel
*/

import React, { useState, useEffect, Component } from 'react';
import {
  Card,
  CardDeck,
} from 'react-bootstrap';
import HeroSection from '../HeroSection.js';
import ArticleCitation from '../ArticleCitation';
import HCitation from '../HCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import '../css/main.css';

import hero from './assets/hotels_hero.jpg';
import map from './assets/coronado_map.jpg';
import coronadoFirst from './assets/hotel_c_1.jpg';
import coronadoSecond from './assets/hotel_c_2.jpg';
import coronadoFood from './assets/hotel_c_food.jpg';
import coronadoRec from './assets/hotel_c_rec.webp';
import yachtFirst from './assets/hotel_y_1.jpg';
import yachtSecond from './assets/hotel_y_2.jpg';
import yachtFood from './assets/hotel_y_food.png';
import yachtRec from './assets/hotel_y_rec.jpg';

class Hotels extends Component{
    HOTEL = {
        YACHT: "yacht club resort",
        SPRINGS: "corondo springs resort",
    }

    constructor() {
        super();
        this.state = {
            hotel: sessionStorage.getItem('savedState') || this.HOTEL.YACHT,
        };
        
    }
    
    switchHotelsToSprings() {
        this.setState({
            hotel: this.HOTEL.SPRINGS
        }, () => {
            sessionStorage.setItem('savedState', this.state.hotel)
        });
    }

    switchHotelsToYacht() {
        this.setState({
            hotel: this.HOTEL.YACHT
        }, () => {
            sessionStorage.setItem('savedState', this.state.hotel)
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="head-hero">
                    <HeroSection
                                image={hero}//'https://waltexpress.com/wp-content/uploads/2016/03/Yacht-Club-Resort-Pool.jpg'
                                height='100'
                                filter='60'>
                    </HeroSection>
                    <div className='centered-child'>
                        <h1 className='centered-title'>Hotels</h1>
                    </div>
                </div>
                <div className="scroll-body">
                <div className="container">
                    <HCitation citation="Picture Citation: Lambert, Christian. Recreation. 2021. Walt Express, https://waltexpress.com/walt-disney-world-deluxe-resort-disneys-yacht-club-resort/"></HCitation>
                    <div class="row">
                        <div class="nav nav-pills justify-content-around">
                            <button className="btn no-click">
                                <b>Hotel:</b> 
                            </button>
                            <button id="yacht" className={this.state.hotel === this.HOTEL.YACHT ? "btn-primary btn" : "btn"} onClick={() => this.switchHotelsToYacht()}>
                                <b>Yacht Club</b>
                            </button>
                            <button className={this.state.hotel === this.HOTEL.SPRINGS ? "btn-primary btn ml-2" : "btn ml-2"} onClick={() => this.switchHotelsToSprings()}>
                                <b>Coronado Springs</b>
                            </button>
                        </div>
                    </div>
                    {
                        this.state.hotel === this.HOTEL.SPRINGS?
                        <div>
                            <h2 className="heading">Disney’s Coronado Springs Resort</h2>
                            <hr className="the-hr"></hr>
                            <div class="row mt-3 article">
                                <div class="col MR-3">
                                    <div class="right-div">
                                        <p class="left-justified">A captivating hotel with Spanish, Mexican, and Southwest American inspired architecture, built around the 15-acre glistening lake Lago Dorado, Disney offers a modern and energizing experience for everyone who chooses this as their destination home. With amenities such as an expansive Mayan-themed pool complex, 18 restaurants nearby the resort, and many more, Coronado Springs Resort will provide unique and unforgettable memories.</p>
                                        <h6><b>Resort Address:</b></h6>
                                        <p>1000 West Buena Vista Drive<br></br>Lake Buena Vista, Florida 32830-8403<br></br><a href="javascript:void(0)" onclick="return false;">(407) 939-1000</a></p>
                                    </div>
                                </div>
                            </div>
                            <img className="img-fluid article-image" src={map}></img>
                            <ArticleCitation citation="Walt Disney Company. Disney’s Coronado Springs Resort. 2017. Walt Disney World Magic, https://www.wdwmagic.com/other/maps/gallery/07apr2017-april-2017-walt-disney-world-resort-hotel-maps/30016.htm"></ArticleCitation>
                            <hr></hr>
                            <div class="alt-1"> 
                                <div className="row article">
                                    <div class="col-md mr-3">
                                        <div class="right-div">
                                            <section>
                                                <p><b>General Amenities/Information:</b></p>
                                                <ul className="mt-n3" aria-label="">
                                                    <li>
                                                        Built 08/01/1997
                                                    </li>
                                                    <li>
                                                        1915 total number of room and suites in three villages around the lake, 545 rooms in 15-story Gran Destino Tower
                                                    </li>
                                                    <li>
                                                        ADA compliant rooms: 99 
                                                    </li>
                                                    <li>
                                                        WIFI
                                                    </li>
                                                    <li>
                                                        Fitness Center 
                                                    </li>
                                                    <li>
                                                        Free airport transportation
                                                    </li>
                                                    <li>
                                                        24-hour security
                                                    </li>
                                                    <li>
                                                        24-hour front desk
                                                    </li>
                                                    <li>
                                                        Free shuttle / taxi services 
                                                    </li>
                                                    <li>
                                                        Outdoor Pool 
                                                    </li>
                                                    <li>
                                                        Heated Pool
                                                    </li>
                                                    <li>
                                                        Baggage Storage
                                                    </li>
                                                    <li>
                                                        Spa
                                                    </li>
                                                    <li>
                                                        Non-smoking facility
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={coronadoFirst} className="cropped-400 img-fluid article-image"></img>
                                        <ArticleCitation citation="Citation: L., Heather. Giant pyramid and waterslide. 2019. Yelp, https://www.yelp.com/biz_photos/disneys-corona do-springs-resort-orlando-2?select=bXq6MdJETZ kkn5NxhcjgCg" />
                                    </div>
                                </div>
                            </div>
                            <div class="alt-1"> 
                                <div class="row mt-3 article">
                                    <div class="col-md">
                                    <img src={coronadoSecond} className="img-fluid article-image"></img>
                                    <ArticleCitation citation="Citation: W., Teressa. Disney’s Coronado Springs Resort. 2020. Yelp, https://www.yelp.com/biz_ photos/disneys-coronado-springs-resort-orlando -2?select=vjzzQCs8c2CCVrgXdOVoZA"></ArticleCitation>
                                    </div>
                                    <div class="col">
                                        <div class="right-div">
                                        <section>
                                                <p><b>Room Features:</b></p>
                                                <ul className="mt-n3" aria-label="">
                                                    <li>
                                                    Air conditioning
                                                    </li>
                                                    <li>
                                                    Room service-There is room service available to resort guests, which offers continental breakfast (7-11 a.m.) and light (sandwiches, pizza, snacks) dining throughout the day (11 a.m.-11 p.m.).
                                                    </li>
                                                    <li>
                                                    Refrigerator
                                                    </li>
                                                    <li>
                                                    Housekeeping
                                                    </li>
                                                    <li>
                                                    Safe 
                                                    </li>
                                                    <li>
                                                    Flatscreen TV
                                                    </li>
                                                    <li>
                                                    Average guest room is 314 square feet
                                                    </li>
                                                    <li>
                                                    Rooms only have one sink
                                                    </li>
                                                    <li>
                                                    Sliding wood doors across sink area 
                                                    </li>
                                                    <li>
                                                    4-cup coffee makers (decaf and regular coffee packets) 
                                                    </li>
                                                    <li>
                                                    In-room iron/ironing board
                                                    </li>
                                                    <li>
                                                    In-room hair dryer
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <CardDeck className="mb-4">
                                <Card>
                                    <a className="card-link" href="#/corondo-springs-food">
                                        <Card.Img variant="top" className="card-top" src={coronadoFood} />
                                        <div className="hotel-card">Picture Citation: Walt Disney World. Maya Grill. 2016. Yelp, https://www.yelp.com/biz_photos/maya-grill-orlando-2?select=zS-e1bYjpjbYxDLZqx8sFw</div>
                                        <Card.Body>
                                            <Card.Title><b>Food</b></Card.Title>
                                            <Card.Text>
                                                Enjoy some amazing food from a variety of restaurants within Disney’s Coronado Springs Resort!
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </a>
                                </Card>
                                <Card href="#recreation">
                                    <a className="card-link" href="#corondo-springs-recreation">
                                    <Card.Img variant="top" className="card-top" src={coronadoRec}></Card.Img>
                                    <div className="hotel-card">Picture Citation: Bricker, Tom. Stopped By the Pool. 2018. Disney Tourist Blog, https://www.disneytouristblog.com/coronado-springs-resort-update-october-2018/</div>
                                    <Card.Body>
                                        <Card.Title><b>Recreation</b></Card.Title>
                                        <Card.Text>
                                            Let yourself live out the wonderful recreation options in Disney’s Coronado Springs Resort!
                                        </Card.Text>
                                    </Card.Body>
                                    </a>
                                </Card>
                            </CardDeck>
                        </div>
                        :
                        <div>
                            <h2 className="heading">Disney’s Yacht Club Resort</h2>
                            <hr className="the-hr"></hr>
                            <div class="row mt-3 article">
                                <div class="col MR-3">
                                    <div class="right-div">
                                        <p class="left-justified">Disney’s Yacht Club Resort is built in a New England-style yacht club style and is located on Crescent Lake, right next door to its sister hotel, the Beach Club Resort. Each room and lobby is decorated with nautical touches to complete the seafaring experience. With over ten dining locations in this hotel, it is the perfect place for anyone looking to switch up from their daily life. Renting watercraft from Bayside Marina is a fun way to spend a sunny day, and boat rides are available for travelling to Disney’s Hollywood Studios nearby. </p>
                                        <h6><b>Resort Address:</b></h6>
                                        <p>1700 Epcot Resorts Boulevard<br></br>Lake Buena Vista, Florida 32830-8407<br></br><a href="javascript:void(0)" onclick="return false;">(407) 934-7000</a></p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div class="alt-1"> 
                                <div className="row article">
                                    <div class="col-md mr-3">
                                        <div class="right-div">
                                            <section>
                                                <p><b>General Amenities/Information:</b></p>
                                                <ul className="mt-n3" aria-label="">
                                                    <li>
                                                    Built 11/5/1990
                                                    </li>
                                                    <li>
                                                    630 rooms total, 539 regular guest rooms
                                                    </li>
                                                    <li>
                                                    ADA rooms: 10 
                                                    </li>
                                                    <li>
                                                    Storages
                                                    </li>
                                                    <li>
                                                    Free WIFI 
                                                    </li>
                                                    <li>
                                                    Free airport transportation
                                                    </li>
                                                    <li>
                                                    Self-parking - $25 per night, valet parking available for $33
                                                    </li>
                                                    <li>
                                                    Breakfast buffet
                                                    </li>
                                                    <li>
                                                    Hot tub 
                                                    </li>
                                                    <li>
                                                    24-hour security 
                                                    </li>
                                                    <li>
                                                    24-hour front desk
                                                    </li>
                                                    <li>
                                                    Concierge
                                                    </li>
                                                    <li>
                                                    Spa
                                                    </li>
                                                    <li>
                                                    Laundry and dry cleaning services
                                                    </li>
                                                    <li>
                                                    Fitness center
                                                    </li>
                                                    <li>
                                                    Non-smoking hotel
                                                    </li>
                                                    <li>
                                                    Free shuttle or taxi service
                                                    </li>
                                                    <li>
                                                    Outdoor pool
                                                    </li>
                                                    <li>
                                                    Lazy river
                                                    </li>
                                                    <li>
                                                    Heated Pool
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={yachtFirst} className="img-fluid article-image cropped-500"></img>
                                        <ArticleCitation citation="Clark, Vicki. Pool. 2020. Royal Treatment Travel, https://royaltreatmenttravel.com/disneys-yacht-club-resort/"></ArticleCitation>
                                    </div>
                                </div>
                            </div>
                            <div class="alt-1"> 
                                <div class="row mt-3 article">
                                    <div class="col-md">
                                    <img src={yachtSecond} className="img-fluid article-image"></img>
                                    <ArticleCitation citation="Citation: Blog, Mickey. Stormalong Bay at Disney Yacht Club Resort. 2018. Mickey Blog, https://mickeyblog.com/2018/08/20/6-reasons-must-stay-yacht-club/"></ArticleCitation>
                                    </div>
                                    <div class="col">
                                        <div class="right-div">
                                        <section>
                                                <p><b>Room Features:</b></p>
                                                <ul className="mt-n3" aria-label="">
                                                    <li>
                                                    Air conditioning
                                                    </li>
                                                    <li>
                                                    Room service
                                                    </li>
                                                    <li>
                                                    Refrigerator
                                                    </li>
                                                    <li>
                                                    Housekeeping
                                                    </li>
                                                    <li>
                                                    Safe 
                                                    </li>
                                                    <li>
                                                    Flatscreen TV
                                                    </li>
                                                    <li>
                                                    Private balcony
                                                    </li>
                                                    <li>
                                                    Iron
                                                    </li>
                                                    <li>
                                                    Desk
                                                    </li>
                                                    <li>
                                                    Hair dryer 
                                                    </li>
                                                    <li>
                                                    Double-sinks
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <CardDeck className="mb-4">
                                <Card href="#food">
                                    <a className="card-link" href="#/yacht-club-food">
                                        <Card.Img variant="top" className="card-top" src={yachtFood} />
                                        <div className="hotel-card">Picture Citation: Walt Disney World. Ale & Compass Restaurant. 2019. Yelp, https://www.yelp.com/biz_photos/ale-and-compass-restaurant-orlando?select=Qq9LDQx6PkaHeS74GQxHqw</div>
                                        <Card.Body>
                                            <Card.Title><b>Food</b></Card.Title>
                                            <Card.Text>
                                                Enjoy some amazing food from a variety of restaurants within Disney’s Yacht Club Resort!
                                            </Card.Text>
                                        </Card.Body>
                                    </a>
                                </Card>
                                <Card href="#recreation">
                                    <a className="card-link" href="#/yacht-club-recreation">
                                        <Card.Img variant="top" className="card-top" src={yachtRec} />
                                        <div className="hotel-card">Disney, Marcio. Stormalong Bay at Night. 2014. Marcio Disney Pictures, http://fashionforwork.blogspot.com/2012/03/attention-guys.html</div>
                                        <Card.Body>
                                            <Card.Title><b>Recreation</b></Card.Title>
                                            <Card.Text>
                                                Let yourself live out the wonderful recreation options in Disney’s Yacht Club Resort!
                                            </Card.Text>
                                        </Card.Body>
                                    </a>
                                </Card>
                            </CardDeck>
                        </div>
                    }
                </div>
                </div>
            </div>
        );
    }
}

export default Hotels;