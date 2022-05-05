/*
Branching Food page 
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

import hero from './assets/food_hero.jpg';
import asian from './assets/asian.webp';
import italian from './assets/prato.jpg';
import hispanic from './assets/hispanic.jpg';
import fusion from './assets/fusion.jpg';
import african from './assets/african.jpg';
import french from './assets/french-card.jpg';
import middleEastern from './assets/middle-eastern-card.jpg';
import veg from './assets/veg-card.jpg';

function ExFood(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image={hero}//'https://media-cdn.tripadvisor.com/media/photo-o/07/77/96/fe/the-ritz-carlton-orlando.jpg'
                    height='100'
                    filter='60'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">Local Food</h1>
                </div>
            </div>
            <div className="scroll-body">
            <div className="container">
                <HCitation citation="NAIC. Norman’s. 2019. NAIC, https://content.naic.org/article/daily_news_welcome_orlando.htm"></HCitation>
                <CardSection>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-italian">
                            <Card.Img variant="top" className="card-top food-image" src={italian} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Italian</Card.Title>
                                    <Card.Text>
                                        Enjoy local Italian cuisine!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Pizarri, Michael. Prato's diavolo pizza is on the Winter Park restaurant's new happy hour menu, 2017. Orlando Sentinel, https://www.orlandosentinel.com/food-restaurants/os-et-prato-happy-hour-20170801-story.html"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-asian">
                            <Card.Img variant="top" className="card-top food-image" src={asian} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Asian</Card.Title>
                                    <Card.Text>
                                        Feast on local Asian dishes!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Home is a Kitchen. Kung Pao Chicken. 2019. Home is a Kitchen, https://homeisakitchen.com/2019/10/06/chengdu-taste-szechuan-review/"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-hispanic">
                            <Card.Img variant="top" className="card-top food-image" src={hispanic} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Hispanic</Card.Title>
                                    <Card.Text>
                                        Experience a scrumptious Hispanic meal!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Universal Orlando. Familiar Yet Unexpected. 2021. Universal Orlando Resort Meetings and Events, https://www.uomeetingsandevents.com/Event-Options/Overview/Universal-Citywalk/Antojitos-Authentic-Mexican-Food.html"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-fusion">
                            <Card.Img variant="top" className="card-top food-image" src={fusion} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Fusion</Card.Title>
                                    <Card.Text>
                                        Pig out at a local fusion restaurant!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="J., Travis. Spiced Alligator Bites. 2018. Yelp, https://www.yelp.com/biz_photos/caf%C3%A9-tu-tu-tango-orlando-5?select=cg7APOHAHFv7ArDfJDSMXA"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-american">
                            <Card.Img variant="top" className="card-top food-image" src="https://images.squarespace-cdn.com/content/v1/57c63f3e03596e373290b357/1592419675327-D8MNK47GRJFF2GQ218RK/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=1500w" />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>American</Card.Title>
                                    <Card.Text>
                                        Realize the American style brought to Orlando's locals!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Se7en Bites. The Baller. 2020. Se7evn Bites, http://www.se7enbites.com/gallery "></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-african">
                            <Card.Img variant="top" className="card-top food-image" src={african} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>African</Card.Title>
                                    <Card.Text>
                                        Interest yourself in some delicious African food!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="D., Kiana. Selam Veggie Special. 2020. Yelp, https://www.yelp.com/biz_photos/selam-ethiopian-and-eritrean-cuisine-orlando?select=SOuQiNnbjzcKiNUo5nP84Q"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-french">
                            <Card.Img variant="top" className="card-top food-image" src={french} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>French</Card.Title>
                                    <Card.Text>
                                    Say enchanté to some delicious French food.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Le Gourmet Break. Breakfast. 2020. Le Gourmet Break, https://www.legourmetbreak.com/"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-middle-eastern">
                            <Card.Img variant="top" className="card-top food-image" src={middleEastern} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Middle Eastern</Card.Title>
                                    <Card.Text>
                                    Enjoy middle eastern cuisine at these amazing places.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Thinkstock, Violetta. Falafels Served with Yogurt or Hummus. 2016. QSR, https://www.qsrmagazine.com/menu-innovations/middle-eastern-cuisine-makes-its-move"></CardCitation>
                        </a>
                    </Card>
                    <Card className="p-card">
                        <a className="card-link" href="#/explore-food-vegetarian-vegan">
                            <Card.Img variant="top" className="card-top food-image" src={veg} />
                            <Card.ImgOverlay className="food-overlay">
                                <div className="card-hover"></div>
                                <Card.Body className="over-body">
                                    <Card.Title>Vegetarian & Vegan</Card.Title>
                                    <Card.Text>
                                    Take an amazing vegetarian food journey through.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Market On South. A Vegetarian Meal. 2017. Yelp, https://www.yelp.com/biz_photos/market-on-south-orlando?select=dGuQIoGAhhEgglwQBypSzQ"></CardCitation>
                        </a>
                    </Card>
                </CardSection>
            </div>
            </div>
        </div>
    );
}

export default ExFood;