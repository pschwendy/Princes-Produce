/*
Coronando Springs recreation page
Simple alternating article
*/

import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

import hero from './assets/springs_rec_hero.jpg';

function SpringsRec() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image={hero}
          height='100'
          filter="50">
        </HeroSection>
        <div className='centered-child'>
          <h1 className="centered-title">Coronado Springs Recreation</h1>
        </div>
      </div>
        <div class="overdiv">
            <div class="container mx-auto">
                <HCitation citation="Picture Citation: Disney. Art for Gran Destino Tower. 2018. Watsons Do Disney, https://watsonsdodisney.com/2018/11/24/disneys-coronado-springs-resort-update-gran-destino-tower/"></HCitation>
                <div class="alt-1"> 
                    <div class="row article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <h4>
                                Dig Site
                                </h4>
                                <p>
                                The Dig Site is home to the spacious Lost City of Cibola Pool, that features a 50-foot Mayan pyramid as its centerpiece, as well as the 123-foot-long Jaguar Water Slide. In addition, it also hosts a white-sand volleyball court and the largest outdoor hot tub.
                                </p>
                                <h4>
                                Iguana Arcade
                                </h4>
                                <p>
                                The Iguana Arcade, also located at the Dig Site, is full of fun and adventurous games you can play with your peers. From playing air hockey to battling aliens, this is a can’t miss for a fun time. You have to buy a Game Card and add game points using a credit card or cash at a kiosk located in the arcade in order to play.
                                </p>
                                <h4>
                                La Vida Health Club
                                </h4>
                                <p>
                                Complete with both a fitness center and a spa, enjoy relaxing manicures and facials after the experience.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="https://d3bo0mk5kk7egf.cloudfront.net/imgstore/ElementGalleryItems/resorts/Fullsize/Disneys-Coronado-Springs-Resort_Full_8204.jpg?width=1600&quality=80&encoder=freeimage&progressive=true" className="img-fluid article-image cropped-400"></img>
                            <ArticleCitation citation="Walt Disney World. The Dig Site Feature Pool. 2018. Walt Disney World Magic, https://www.wdwmagic.com/resorts/disneys-coronado-springs-resort/news/08aug2018-main-feature-pool-area-at-disneys-coronado-springs-resort-closing-for-lengthy-refurbishment-this-fall.htm"></ArticleCitation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SpringsRec;