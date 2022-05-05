/*
Coronando Springs food page
Simple alternating article
*/

import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

function SpringsFood() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image='https://attractionsmagazine.com/wp-content/uploads/2017/02/CoronadoSprings-at-WaltDisneyWorldResort-Rendering.jpeg'
          height='100'
          filter="50">
        </HeroSection>
        <div className='centered-child'>
          <h1 className="centered-title">Coronado Springs Food</h1>
        </div>
      </div>
        
      
        <div class="overdiv">
            <div class="container mx-auto">
                <HCitation citation="Disney. Art for Gran Destino Tower. 2018. Watsons Do Disney, https://watsonsdodisney.com/2018/11/24/disneys-coronado-springs-resort-update-gran-destino-tower/"></HCitation>
                <div class="alt-1"> 
                    <h2 className="heading">Siestas Cantina</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <p>
                                    Located in Disney's Coronado Springs Resort
                                </p>
                                <p>
                                Siestas Cantina serves both Latin and classic American cuisine in an outdoor setting. With low prices and a pool located nearby, it’s the perfect place to spend a lazy afternoon.
                                </p>
                                <p>
                                Hours: 11:00 AM to 10:00 PM
                                </p>
                                <p>
                                Average entree price for adults: $15 
                                </p>
                                <p><a href="https://disneyworld.disney.go.com/dining/coronado-springs-resort/siestas-cantina/menus/">See the menu</a></p>
                                <p className="">
                                    “Had the Mahi fish tacos and they were good. Fries were also tasty. Kids meal came with a bucket and shovel which was cool. Had a nice meal poolside. Meals for 3 cost $40. I would totally eat here again. … great place to eat or drink while kids are swimming.” - PhatPatW on Tripadvisor (November 2019)
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/3TRwzmWdJry2SLu6tvvPgg/o.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="C., Christopher. Siestas Cantina. 2015. Yelp, https://www.yelp.com/biz_photos/siestas-cantina-lake-buena-vista?select=3TRwzmWdJry2SLu6tvvPgg"></ArticleCitation>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Barcelona Lounge</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/XjbCE4taoeoOe87Zy8xjAw/o.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="C., Amy. Barcelona Lounge. 2020. Yelp, https://www.yelp.com/biz_photos/barcelona-lounge-orlando?select=XjbCE4taoeoOe87Zy8xjAw"></ArticleCitation>
                        </div>
                        <div class="col">
                            <div class="right-div">
                                <p>
                                Located in Disney's Coronado Springs Resort
                                </p>
                                <p>
                                The Barcelona Lounge is located in the Gran Destino Tower at Disney’s Coronado Springs Resort on the lower lobby level. This bright café offers coffee, espresso, and pastries all inspired by Spain’s coffee culture.
                                </p>
                                <p>
                                Hours: 7:00 AM to 11:00 AM
                                </p>
                                <p>
                                Average coffee price: $4 per beverage 
                                </p>
                                <p><a href="https://disneyworld.disney.go.com/dining/coronado-springs-resort/barcelona-lounge/menus/">See the menu</a></p>
                                <p className="">
                                “Deep rich espresso resting on top of the perfect amount of sweetened condensed milk. Fantastic recommendation. Great beverage atmosphere and service. Josh should be recognized for his professionalism, knowledge, and customer service. Definitely returning on our next visit.” - Vincent M on Tripadvisor (August 2019)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Three Bridges Bar & Grill</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col">
                            <div class="right-div">
                                <p>
                                Located in Disney's Coronado Springs Resort
                                </p>
                                <p>
                                The Three Bridges Bar & Grill offers Latin, casual dining and is surrounded by the Lago Doroto. This restaurant offers a wide range of cuisine and stunning views of the surrounding water.
                                </p>
                                <p>
                                Hours: 4:30 PM to 12:00 AM
                                </p>
                                <p>
                                Average entree price for adults: $18
                                </p>
                                <p><a href="https://disneyworld.disney.go.com/dining/coronado-springs-resort/three-bridges/menus/">See the menu</a></p>
                                <p className="">
                                “Lovely atmosphere, yummy apps. Husband and I liked the laid back feel of this bar...unlike many places at WDW! The lentil hummus was exceptional. Enjoyable evening on the deck with a view of Gran Destino tower. Highly recommend.” - Nuttree2013 on Tripadvisor 
                                </p>
                            </div>
                        </div>
                        <div class="col-md mr-3">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/a8qmXLKSyLCY0FW2pU-LYg/o.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="S., Bill. Three Bridges Bar & Grill. 2020. Yelp, https://www.yelp.com/biz_photos/three-bridges-bar-and-grill-orlando-2?select=a8qmXLKSyLCY 0FW2pU-LYg"></ArticleCitation>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">El Mercado de Coronado</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/9UVoeCGjmnkxFk5RqQ9m9g/o.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="H., Joel. El Mercado de Coronado. 2019. Yelp, https://www.yelp.com/biz_photos/el-mercado-de-coronado-orlando-2?select=9UVoeCGjmnkxFk5RqQ9m9g"></ArticleCitation>
                        </div>
                        <div class="col">
                            <div class="right-div">
                                <p>
                                Located in Disney's Coronado Springs Resort
                                </p>
                                <p>
                                El Mercado de Coronado sits in a wide open room with seating for over 400 guests. Grab a salad or sandwich to eat on the go or sit down to enjoy food off the grill.
                                </p>
                                <p>
                                Hours: 7:00 AM - 11:00 PM (Serves breakfast, lunch, and dinner)
                                </p>
                                <p>
                                Average entree price for adults: $11 
                                </p>
                                <p><a href="https://disneyworld.disney.go.com/dining/coro nado-springs-resort/mercado-coronado/menus/">See the menu</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Maya Grill</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col">
                            <div class="right-div">
                                <p>
                                Located in Disney's Coronado Springs Resort
                                </p>
                                <p>
                                The Maya Grill offers a wide range of cuisine including both American and Mexican. Enjoy the views in this themed restaurant along with vibrant entrees and decadent desserts.
                                </p>
                                <p>
                                Hours: Closed Temporarily (Serves dinner)
                                </p>
                                <p>
                                Average entree price for adults: $28
                                </p>
                                <p><a href="https://disneyworld.disney.go.com/dining/coronado-springs-resort/maya-grill/menus/">See the menu</a></p>
                            </div>
                        </div>
                        <div class="col-md mr-3">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/zS-e1bYjpjbYxDLZqx8sFw/o.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="Walt Disney World. Maya Grill. 2016. Yelp, https://www.yelp.com/biz_photos/maya-grill-orlando-2?select=zS-e1bYjpjbYxDLZqx8sFw"></ArticleCitation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SpringsFood;