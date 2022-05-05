/*
Transportation page
Article with alternating rows under each heading where pictures and information swap sides.
*/

import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import HeroSection from '../HeroSection.js';
import HCitation from '../HCitation';
import ArticleCitation from '../ArticleCitation';
import TMap from "../TMap.js";

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

import hero from './assets/transportation.jpg';

function ExTransportation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image={hero}//'https://www.taxi4hire.com/wp-content/uploads/2011/01/disney-world-0.jpg'
          height='100'
          filter='60'>
        </HeroSection>
        <div className='centered-child'>
          <h1 className="centered-title">Transportation</h1>
        </div>
      </div>
        <div class="overdiv">
            <div class="container mx-auto">
                <HCitation citation='Levine, Arthur. Get Around the Resort Easily. 2020. Trip Savvy, https://www.tripsavvy.com/why-stay-at-universal-orlando-hotels-4086570' />
                <TMap />
                <div class="alt-1"> 
                    <h2 className="heading">Lynx Bus Service</h2>
                    <hr className="the-hr"></hr>
                      <div class="row article">
                          <div class="col-md mr-3">
                              <div class="right-div">
                                  <p class="left-justified">LYNX bus service provides an expansive system that can accommodate access to the entirety of the city including popular destinations from malls to museums. LYNX buses can be easily tracked either on the <a href="http://golynx.doublemap.com/map/">website</a> or on the mobile app LYNX Bus Tracker which is available in both the App Store and Google Play. Route maps and schedules are available on the website as well. Typically, single-ride fares cost $2.00 and transfers between routes are free. Be sure to inform the operator when you get on if a transfer is needed and make sure to note that transfers are limited to 90 minutes. All-day passes can be purchased at $4.50 and are valid for use between 4:00 AM the day it is issued until 3:00 AM the next day. Bus passes can be purchased online via the Buy Passes page on the <a href="https://www.golynx.com/store/">website</a> to attain a physical copy or via the app LYNX PawPass for digital passes on your smartphone.</p>
                              </div>
                          </div>
                          <div class="image-container col">
                              <img src="https://media.bizj.us/view/img/8546982/lynx-1*750xx4496-2529-0-236.jpg" className="img-fluid article-image"></img>
                              <ArticleCitation citation="Carchidi, Jim. Mass Transit is Maintained at the Lynx Operations Center. 2016. Orlando Business Journal, https://www.bizjournals.com/orlando/blog/2016/02/photos-mass-transit-maintenance-at-the-lynx.html"></ArticleCitation>
                          </div>
                      </div>
                </div>
                <div class="alt-1"> 
                  <h2 className="heading">LYMMO Downtown Circulator</h2>
                  <hr className="the-hr"></hr>
                    <div class="row mt-3 article">
                        <div class="col-md">
                          <img src="https://live.staticflickr.com/2729/4353513778_bd35dda6f1_b.jpg" className="img-fluid article-image"></img>
                          <ArticleCitation citation="So Cal Metro. Lymmo. 2008. Flickr, https://www.flickr.com/photos/southerncalifornian/4353513778/" />
                        </div>
                        <div class="col">
                            <div class="right-div">
                                <p class="left-justified">Additionally, Orlando offers a free downtown circulator bus, LYMMO, that provides quick and easy access to businesses and services throughout the immediate downtown area. These buses come every 10-15 minutes depending on the time of the day and provide another fun opportunity to tour Orlando.</p>
                                <p class="left-justified">Individuals may also be eligible to use services provided by ACCESS LYNX if they are unable to use the fixed routes due to a disability or other potential limitations. This service offers shared door-to-door transportation. However, a mail-in application is required before all requests and trips have to be scheduled in advance by calling <a href="javascript:void(0)" onclick="return false;">(407) 423-8747</a>. In general, the fixed route service is more affordable and still fully accessible to individuals with disabilities or special needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="alt-1"> 
                    <h2 class="heading">Biking</h2>
                    <hr className="the-hr"></hr>
                    <div class="row mt-3 article">
                        <div class="col-md mr-3">
                          <div class="right-div">
                              <p class="right-justified">Cycling is one of the easiest ways to explore, and Orlando is filled with many safe, scenic paths that surround breathtaking lakes and parks. HOPR, the official bike share of Orlando, has hundreds of bikes scattered throughout the city at various locations. The <a href="https://gohopr.com/orlando/">HOPR app</a> allows for easy bike rental and is available for download in both the App Store and Google Play. With one QR code scan, all that’s left to do is choose your rental type and be on your way. </p>
                              <section>
                                <p>There are four rental options available to cater to your needs:</p>
                                <ul className="mt-n3" aria-label="There are four rental options available to cater to your needs:">
                                    <li>
                                      Per Ride - $1 to unlock, $.25 per minute
                                    </li>
                                    <li>
                                      1 Day Pass - $20 for unlimited riding until midnight, 20¢ per min thereafter.
                                    </li>
                                    <li>
                                      30 Day Pass - $25 for 60 minutes of daily ride time, 20¢ per min thereafter.
                                    </li>
                                    <li>
                                      Annual Pass - $99 for 60 minutes of daily ride time, 20¢ per min thereafter.
                                    </li>
                                </ul>
                              </section>
                          </div>
                      </div>
                      <div class="col">
                          <img src="http://djuebnzkopryn.cloudfront.net/wp-content/uploads/2014/02/soco.jpg" className="img-fluid article-image"></img>
                          <ArticleCitation citation="Baker, Scott. Biking in Orlando. 2014. Orlando Local Guide, http://djuebnzkopryn.cloudfront.net/wp-content/uploads/2014/02/soco.jpg"></ArticleCitation>
                      </div> 
                    </div>
                </div>
                <div class="alt-1">
                  <h2 class="heading">Taxis</h2>
                  <hr className="the-hr"></hr>
                    <div class="row mt-3 article">
                        <div class="col-md">
                            <img src="http://3.bp.blogspot.com/-gYGxymZphLc/VG-oX-AZeKI/AAAAAAAAVPk/BXU6Tl9wLko/s1600/taxi-orlando-transporte.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="Dicas de Orlando. Custos de Usar Taxi em Orlando. 2014. Discas de Orlando, http://orlandoinesquecivel.blogspot.com/2014/11/custos-de-usar-taxi-em-orlando.html"></ArticleCitation>
                        </div>
                        <div class="col-md">
                            <div class="right-div">
                                <p class="right-justified">Taxis are typically available at hotels and surrounding large attractions. But if you don’t prefer to hail your own cab, call <a href="javascript:void(0)" onclick="return false;">407-422-2222</a> for Mears Orlando Taxi Services. Started in 1939, Mears offers both sedans and vans, each equipped with drivers that are local experts and will help you arrive at your destination safely and on time. Additionally, Mears’ partnership with Uber provides luxury rides available on the Uber app, making their taxis more accessible for you. While prices vary depending on type of vehicle and distance traveled, on average Mears taxis are more affordable than other ride sharing options.</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 class="heading">Ridesharing</h2>
                    <hr className="the-hr"></hr>
                    <div class="row mt-3 article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <p class="right-justified"><a href="https://auth.uber.com/login/?uber_client_name=riderSignUp&city_id=7&utm_source=AdWords_Brand&utm_campaign=search-google-brand_1_7_us-chicago_d_txt_acq_cpc_en-us_uber_kwd-169801042_320236091175_22880476120_e_c_track-jan22urlupdate-sl42391-1114_restructure&cid=271787680&adg_id=22880476120&fi_id=5028672018&match=e&net=g&dev=c&dev_m=&cre=320236091175&kwid=kwd-169801042&kw=uber&placement=&tar=&gclsrc=aw.ds&&gclid=EAIaIQobChMI3KS0oYHV3wIVVTVpCh3gPgtTEAAYASABEgK6hvD_BwE&gclsrc=aw.ds">Uber</a> and <a href="https://www.lyft.com/rider">Lyft</a> offer on-demand rides throughout Orlando. With both apps effortless to use, all that is required to get a ride to your destination is a couple clicks. Rates and availability are available on both platforms.</p>
                                <section>
                                  <p><b>Uber</b></p>
                                  <ul className="mt-n3" aria-label="There are four rental options available to cater to your needs:">
                                      <li>
                                      Booking Fee: $2.20
                                      </li>
                                      <li>
                                      Cost per mile: $1.60
                                      </li>
                                      <li>
                                      Per-minute wait time: $0.42
                                      </li>
                                      <li>
                                      Minimum fair: $7.20
                                      </li>
                                  </ul>
                                </section>
                                <section>
                                  <p><b>Lyft</b></p>
                                  <ul className="mt-n3" aria-label="There are four rental options available to cater to your needs:">
                                      <li>
                                      Base Fare: $1.15
                                      </li>
                                      <li>
                                      Cost per mile: $0.82
                                      </li>
                                      <li>
                                      Cost per minute: $0.14 
                                      </li>
                                      <li>
                                      Minimum fare: $4.45
                                      </li>
                                  </ul>
                                </section>
                            </div>
                        </div>
                        <div class="col">
                            <img src="https://media.bizj.us/view/img/10538212/minnie-van-service*1200xx900-506-0-51.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="Walt Disney World. Minnie Van Service. 2020. Walt Disney World, https://disneyworld.disney.go.com/minnie-van/#/drawer=drawerMinnieVanService" />
                        </div>
                    </div>
                </div>
                <div class="alt-1">
                  <h2 class="heading">I-Ride Trolley and Pedicab</h2>
                  <hr className="the-hr"></hr>
                    <div class="row mt-3 article">
                        <div class="col-md mr-3">
                            <img src="https://www.peppertreebay.com/wp-content/uploads/2020/07/siesta-key-transportation-1.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="Peppertree Bay. Siesta Trolley. 2021. Peppertree Bay on Siesta Key, https://www.peppertreebay.com/navigating-siesta-key/ "></ArticleCitation>
                        </div>
                        <div class="col">
                            <div class="right-div">
                                <p class="right-justified">The I-Ride Trolley is perfect for anyone who wishes to ride the Revenge of the Mummy at Universal Studios, visit the Kraken at Seaworld, or get adventurous at the Islands of Adventure. The trolley services destinations in the International Drive area which is home to many attractions that will make your trip eventful and extraordinary. Single ride fare is $2.00 while the price of passes can range from $5.00 per person (1-day pass) to $9.00 per person (5-day pass).</p>
                                <p class="left-justified">Traveling with a small group and looking for a local’s advice? Pedicabs offer quick eco friendly travel for short distances throughout the city. The drivers are friendly and help tourists get an inside peek of Orlando. Additionally, the payment for your ride depends on the number of people riding and distance traveled, and is typically paid as a tip to your driver. Pedicabs are both a great form of downtown transportation and a fun, informative experience.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default ExTransportation;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> 
      
<p>Enjoy sightseeing through downtown Orlando on foot. Take in views of local restaurants and shops while exploring the city and getting your steps in.</p>


                <div class="alt-1">
                  <h2 class="heading">SunRail (Amtrak Station)</h2>
                  <hr className="the-hr"></hr>
                    <div class="row mt-3 article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <p class="right-justified">Sunrail, a commuter rail service, runs north and south for 49 miles through central Florida. The train operates Monday-Friday, and the <a href="https://sunrail.com/">website’s</a> schedule and map allow for easy planning. With four stations in Orlando -AdventHealth, LYNX Central, Church Street, and Orlando Health/Amtrak-, it’s an ideal way to quickly travel from one side of the city to another. Sunrail trains are both bike friendly and ADA compliant and include power outlets, free wifi, and restrooms. If you’re staying in the city round trip tickets range from $1.75-$3.75.</p>
                            </div> 
                        </div>
                        <div class="col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Orlando_Amtrak_Station%3B_Track_Entrance.jpg" className="img-fluid article-image"></img>
                            <ArticleCitation citation="DanTD. Track-side Entrance of the elaborate Orlando, Florida Amtrak Station. 2008. Wikipedia Commons, https://en.wikipedia.org/wiki/Orlando_Health/Amtrak_station"></ArticleCitation>
                        </div>
                    </div>
                </div>
*/