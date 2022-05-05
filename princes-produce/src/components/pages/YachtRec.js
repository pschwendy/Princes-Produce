/*
Yacht Club food page
Simple alternating article
*/

import React, { useState, useEffect } from 'react';
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

import hero from './assets/yacht-club-rec-hero.webp'

function YachtRec() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image={hero}//'https://mickeyblog.com/wp-content/uploads/2018/08/Yacht-Club.jpg'
          height='100'
          filter="60">
        </HeroSection>
        <div className='centered-child'>
          <h1 className="centered-title">Yacht Club Recreation</h1>
        </div>
      </div>
        <div class="overdiv">
            <div class="container mx-auto">
              <HCitation citation="Mickey Blog. Disney's Yacht Club. 2018. Mickey Blog, https://mickeyblog.com/2018/08/20/6-reasons-must-stay-yacht-club/" />
                <div class="alt-1"> 
                    <div class="row article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <h4>
                                Recreational Activities flyer
                                </h4>
                                <p>
                                In this flyer you will find planned activities at the resort like water volleyball, campfire sing-alongs, and movies under the stars.
                                </p>
                                <h4>
                                Ship Shape Health Club
                                </h4>
                                <p>
                                This club is located between the Beach and Yacht Club resorts and is open 24/7. Memberships are free for all guests at the Yacht Club and may be purchased for $12 per day by guests from other Disney resorts. There is a large range of equipment and offerings, from aerobic machines to steam rooms to facials.
                                </p>
                                <h4>
                                Stormalong Bay
                                </h4>
                                <p>
                                Completed with a life-sized shipwreck replica, this fun-filled beachside paradise on the shore of Crescent Lake offers an aquatic adventure. Alongside a lazy river and a water slide, this is guaranteed for a day of fun.
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="http://4.bp.blogspot.com/_zSWJkb_7Edw/S7RTARKUIoI/AAAAAAAAAms/_LzIq6HzAjE/s1600/Stormalong+Bay.JPG" className="img-fluid article-image cropped-400"></img>
                            <ArticleCitation citation="Disney, Marcio. Stormalong Bay at Night. 2014. Marcio Disney Pictures, http://fashionforwork.blogspot.com/2012/03/attention-guys.html"></ArticleCitation>
                        </div>
                    </div>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <img src="https://www.themainstreetmouse.com/wp-content/uploads/2018/09/fullsizeoutput_3153.jpeg" className="img-fluid article-image cropped-400"></img>
                            <ArticleCitation citation="Adani, Janel. Fantasia Gardens and Miniature Golf. 2018. The Main Street Mouse, https://www.themainstreetmouse.com/2018/09/03/fantasia-gardens-and-fairways-miniature-golf/"></ArticleCitation>
                        </div>
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <h4>
                                Fantasia Gardens and Fairways Miniature Golf
                                </h4>
                                <p>
                                This golf adventure is inspired by Disneys’s animated film Fantasia and includes two different 18-hole miniature golf courses. Rounds cost $12 for children between the ages of three and nine and $14 for adults. It is located just South of the Walt Disney World Swan Hotel and is in walking distance from the Yacht Club Resort.
                                </p>
                                <h4>
                                Lafferty Place Arcade
                                </h4>
                                <p>
                                Located next to the Beaches and Cream Soda Shop, this arcade is the perfect place to play a few games or spend an afternoon. When you purchase a game card and load on game points, you’re able to play at any of the 20 Disney Arcades. 
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

export default YachtRec;