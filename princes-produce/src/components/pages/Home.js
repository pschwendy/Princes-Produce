/*
Home Page
Uses carousel inputs to construct carousel which points to Explore Orlando Pages
Creates card section pointing to the Convention Info pages
*/

import React, { useState, useEffect } from 'react';
import {
  Card, CardDeck, Col, Row, Container, Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../HeroSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import Peter from './assets/peter.jpg'
import Max from './assets/max.jpg';
import Jiayi from './assets/jiayi.jpg';
import Dre from './assets/dre.jpg';
import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel
import hero from './assets/hero.png';
import brushStroke from './assets/brush-stroke.png';
import packages from './assets/produce-packages.png';
import kits from './assets/meal-kits.png';
import s3 from './assets/s3.webp';
import kitDescription from './assets/meal-kit-descriptions.webp';
import produceDescription from './assets/pp-des.png';
import conferenceImg from './assets/convention_info_card.jpeg';
import scheduleImg from './assets/schedule_card.jpg';
import hotelsImg from './assets/hotels_card.jpg';
import bpalogo from './assets/logo-transparent.png';
import './css/Home.css';
import '../css/main.css';
import './css/ExFood.css';
function PersonSection(props) {
  return (
      <div className="col-md mb-4 text-center">
          <img className="about-img" src={props.src}></img>
          <h4 className="mt-3">{props.name}</h4>
          <h5>{props.role}</h5>
          <p>{props.description}</p>
      </div>
  );
}
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [size, setSize] = useState(window.innerWidth);
  const editSize = () => {
    setSize(window.innerWidth);
  }
  window.addEventListener('resize', editSize);
  return (
    <div className='App' style={{'background-color': 'white !important'}}>
      <div className="head-hero">
        <HeroSection
          image= {hero}//'https://a.cdn-hotels.com/gdcs/production142/d1678/02312c78-cd46-4e43-b6c6-d174700968a8.jpg'////'https://media.bizj.us/view/img/620061/pg-1-centerpiece-158219737*1200xx2407-1354-0-493.jpg' //https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg
          height='100'
          filter='60'
        >
        </HeroSection>
        <div className='hero-text'>
              <h1 className="landing-title centered-title">PRINCE'S PRODUCE</h1>
              
        </div>
        <div className='hero-text'>
          <img alt='' src={bpalogo} width='auto' height={size > 768 ? '250px': '120px'} className='d-inline-block' id="lower-logo" />
        </div>
      </div>
      <div className="scroll-body"> 
        <div style={{'background-color': 'rgb(211, 200, 193)', marginBottom: '-25px'}}>
          <div className="container">
              <div className="my-4 py-4 row d-flex align-items-md-center justify-content-between">
                <div className="col-md text-center px-4">
                    <Row>
                      <span style={size > 1080 ? {width: '480px', position: 'relative'} : {display: 'none'}}>
                        <img id="about-image" src={bpalogo} width='100%'/>
                      </span>
                      <Col  style={{flexGrow: '4'}}>
                        <h1 style={{textAlign: 'left', color: 'rgb(84, 84, 84)', fontWeight: '700'}}>ABOUT</h1>
                        <br></br>
                        <p style={{textAlign: 'left', fontSize: "1.15em", color: 'rgb(84, 84, 84)'}}>
                        Each year, approximately 2.9 trillion pounds of food—about a third that the world produces—never gets consumed. It's enough to feed the nearly 800 million people worldwide, who suffer from hunger, more than twice over, according to the Food and Agriculture Organization of the United Nations. 
                        <br></br><br></br>Cosmetic imperfections were proven to not affect the quality or freshness of produce, but because of them, 6 billion pounds of fruits and vegetables are not sold to grocery stores in the United States every year. When this "ugly" produce is not sold, it is sent to landfills to rot.
                        <br></br><br></br>Prince's Produce is a start-up business that partners with farmers in California to provide Americans with affordable, fresh, and healthy food. Prince's Produce sources ugly produce as well as dairy, grains, and meats from local farmers to create produce packages and meal kits. Prince's Produce aims to eliminate food waste and hunger across the world through its services.
                        </p>
                      </Col>
                    </Row>
                </div>
              </div>
            </div>
        </div>
        
        <div maxWidth="100%" className='center-parent'>
          <img className="center-x" src={brushStroke}></img>
          <div id="underwhite"></div>
          <div className="container centered-div" style={{paddingTop: '80px'}}>
            
            <h1 style={{textAlign: 'left', color: 'black', fontWeight: '700', fontSize: '3em'}}>OUR PRODUCTS</h1>
            <Row style={{marginTop: '20px'}}>
              <div style={size > 768 ? {borderRight: '2px solid black'} : {}} className="col-md mb-4 text-center">
                  <h2 style={{textAlign: 'center', color: 'black', fontWeight: '700', fontSize: '2em'}} className="heading my-4">PRODUCE PACKAGES</h2>
                  <img style={{height: '300px', width: '300px', objectFit: 'cover', borderRadius: '100%'}} src={packages}></img> 
              </div>
              <div style={size > 768 ? {borderLeft: '2px solid black'} : {}} className="col-md mb-4 text-center">
                  <h2 style={{textAlign: 'center', color: 'black', fontWeight: '700', fontSize: '2em'}} className="heading my-4">MEAL KITS</h2>
                  <img style={{width: '300px', height: '300px', objectFit: 'cover', borderRadius: '100%'}} src={kits}></img> 
              </div>
            </Row>
            
          </div>
        </div>
        <div className='center-parent'>
          <img className='center-parent' style={{width: '100%', height: '89vh', objectFit: 'cover', filter: "brightness(40%)"}} src={s3}></img>
          <div className="container centered-div text-center" style={size > 768 ? {paddingTop: '60px'} : {paddingTop: '30px'}}>
            
            <h1 style={size > 768 ? {textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '3em', marginBottom: '70px'} : {textAlign: 'center', color: 'white', fontWeight: '700', fontSize: '3em', marginBottom: '40px'}}>HOW IT WORKS</h1>
            <Row className="text-center mb-4">
                <div className="col-md mb-4 text-center">
                    <div className="" style={{textAlign: 'center', color: 'white'}}>
                      <div className="mx-auto about-img center-parent" style={size > 768 ? {height: '60px', width: '60px', objectFit: 'cover', borderRadius: '100%', background: 'rgb(102, 150, 200)', margin: '0 auto', marginBottom: '50px',  textAlign: 'center'} : {height: '40px', width: '40px', objectFit: 'cover', borderRadius: '100%', background: 'rgb(102, 150, 200)', margin: '0 auto', marginBottom: '10px',  textAlign: 'center'}}><p className="centered-div" style={{fontSize: '1.1em', fontWeight: 700}}>1</p></div>
                      <p style={size > 768 ? {textAlign: 'center', color: 'white', fontSize: '1.4em'} : {textAlign: 'center', color: 'white', fontSize: '1.1em'}}>Browse our collection of meal kits and produce packages.</p>
                    </div>
                </div>
                <div className="col-md mb-4 text-center">
                    <div className="" style={{textAlign: 'center', color: 'white'}}>
                      <div className="mx-auto about-img center-parent" style={size > 768 ? {height: '60px', width: '60px', objectFit: 'cover', borderRadius: '100%', background: 'rgb(102, 150, 200)', margin: '0 auto', marginBottom: '50px',  textAlign: 'center'} : {height: '40px', width: '40px', objectFit: 'cover', borderRadius: '100%', background: 'rgb(102, 150, 200)', margin: '0 auto', marginBottom: '10px',  textAlign: 'center'}}><p className="centered-div" style={{fontSize: '1.1em', fontWeight: 700}}>2</p></div>
                      <p style={size > 768 ? {textAlign: 'center', color: 'white', fontSize: '1.4em'} : {textAlign: 'center', color: 'white', fontSize: '1.1em'}}>Select your chosen package, input your delivery address, and pay securely online.</p>
                    </div>
                </div>
                <div className="col-md mb-4 text-center">
                    <div className="" style={{textAlign: 'center', color: 'white'}}>
                      <div className="mx-auto about-img center-parent" style={size > 768 ? {height: '60px', width: '60px', objectFit: 'cover', borderRadius: '100%', background: 'rgb(102, 150, 200)', margin: '0 auto', marginBottom: '50px',  textAlign: 'center'} : {height: '40px', width: '40px', objectFit: 'cover', borderRadius: '100%', background: 'rgb(102, 150, 200)', margin: '0 auto', marginBottom: '10px',  textAlign: 'center'}}><p className="centered-div" style={{fontSize: '1.1em', fontWeight: 700}}>3</p></div>
                      <p style={size > 768 ? {textAlign: 'center', color: 'white', fontSize: '1.4em'} : {textAlign: 'center', color: 'white', fontSize: '1.1em'}}>Prince's Produce will be delivered to your doorstep at your chosen time.</p>
                    </div>
                </div>
            </Row>
          </div>
        </div>
        <div className="overdiv-green">
          <div className="container mx-auto pb-5 pt-5">
            <div className="alt-1"> 
                <h1 className="heading" style={size > 768 ? {fontSize: '2.6em'} : {fontSize: '1.8em'}}>PRODUCE PACKAGES</h1>
                <div class="row article">
                    <div class="col-md mr-3 center-parent">
                      <div className={size > 768 ? "right-div article-settings centered-div" : "right-div article-settings"}>
                          <h2 className="heading mb-4" style={size > 768 ? {fontSize: '2.0em', textAlign: 'left'} : {fontSize: '1.2em', textAlign: 'center'}}>What are your options?</h2>
                          <ul>
                            <li className="des-bullet">3 sizes, 3 prices</li>
                            <li className="des-bullet">Select your prefered produce!</li>
                            <li className="des-bullet">Nutricious and fresh</li>
                            <li className="des-bullet">Special Deals and Offers</li>
                          </ul>
                          {size > 768 ? 
                            <div>
                              <br></br>
                              <br></br>
                              <br></br>
                            </div> : 
                            <div>
                              <br></br>
                            </div>
                            }
                          <Button id="browse" href="#/produce-packages" variant="success">BROWSE OUR PACKAGES</Button>
                      </div>
                    </div>
                    <div class="col">
                        <img src={produceDescription} style={size > 768 ? {} : {display: 'none'}} className="img-fluid article-image"></img>
                        
                    </div>
                </div>
            </div>
            <div class="alt-1"> 
                <h1 className="heading" style={size > 768 ? {fontSize: '2.6em'} : {fontSize: '1.8em'}}>MEAL KITS</h1>
                <div class="row article">
                    <div class="col-md mr-3">
                        <img src={kitDescription} style={size > 768 ? {} : {display: 'none'}} className="img-fluid article-image"></img>
                    </div>
                    <div class="col center-parent">
                        <div className={size > 768 ? "right-div article-settings centered-div" : "right-div article-settings"}>
                            <h2 className="heading mb-4" style={size > 768 ? {fontSize: '2.0em', textAlign: 'left'} : {fontSize: '1.2em', textAlign: 'center'}}>What's inside each kit?</h2>
                            <ul>
                              <li className="des-bullet">Illustrated step-by-step recipes</li>
                              <li className="des-bullet">Ready to cook, fresh ingredients</li>
                              <li className="des-bullet">QR codes for real-time videos</li>
                              <li className="des-bullet">Guaranteed delicious meals!</li>
                            </ul>
                            {size > 768 ? 
                            <div>
                              <br></br>
                              <br></br>
                              <br></br>
                            </div> : 
                            <div>
                              <br></br>
                            </div>
                            }
                            <div width='100%'>
                              <Button id="browse" href="#/meal-kits" variant="success">BROWSE OUR KITS</Button>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
/* expedia widget: <div id="searchWidget" className="expedia-widget"><iframe id="widgetIframe" className="expedia-frame"src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=1&tp1=79938273458&tp2=&lob=F&des=Orlando, Fl&wbi=2&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=2&sfs=H300FW600F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>
= "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default Home;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */

      /*<HeroSection
        image='https://www.itl.cat/pngfile/big/92-924579_bondi-beach-ultra-hd-4k-wallpaper-4k-desktop.jpg'
        height='90'
      >
        <p className='centered-child'>Testing</p>
      </HeroSection>
      <CardSection>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </CardSection>

      <div className='button-container'>
              <Button variant="primary">Primary</Button>
              <Button variant="primary">Secondary</Button>
            </div>
      
      
      
      
      
      
      
<CarouselSection height='850'>{carouseloutputs}</CarouselSection>
        

        
        <div className="container mb-4">
            <h1 className="convention-title">Learn More About the Convention</h1>
            <hr />
              <CardSection>
                  <Card className="p-card p-card-left">
                      <a className="card-link" href="#/general-info">
                          <Card.Img variant="top" className="card-top food-image p-card-img" src={conferenceImg}/>
                          <Card.ImgOverlay className="food-overlay">
                            <div className="card-hover"></div>
                              <Card.Body className="over-body">
                                  <Card.Title>General Info</Card.Title>
                                  <Card.Text>
                                      All you need to know about the National Conference!
                                  </Card.Text>
                              </Card.Body>
                          </Card.ImgOverlay>
                          <div className="card-citation">
                          Fuller Street. BPA 2019 National Leadership Conference After Party. 2019. Fuller Street, http://www.fullerstreet.com/event-resume/bpa-2019-national-leadership-conference-after-party.html
                          </div>
                      </a>
                  </Card>
                  <Card className="p-card p-card-left">
                      <a className="card-link" href="#/schedule">
                          <Card.Img variant="top" className="card-top food-image p-card-img" src={scheduleImg} />
                          <Card.ImgOverlay className="food-overlay">
                              <div className="card-hover"></div>
                              <Card.Body className="over-body">
                                  <Card.Title>Schedule</Card.Title>
                                  <Card.Text>
                                      When are your events? Let's find out.
                                  </Card.Text>
                              </Card.Body>
                          </Card.ImgOverlay>
                          <div className="card-citation">
                          University of Texas, Dallas. High School Programming Contest. 2016. UT Dallas, https://cs.utdallas.edu/battle-of-the-brains-fall-2016-hs-programming/
                          </div>
                      </a>
                  </Card>
                  <Card className="p-card">
                      <a className="card-link" href="#/hotels">
                          <Card.Img variant="top" className="card-top food-image p-card-img" src={hotelsImg} />
                          <Card.ImgOverlay className="food-overlay">
                              <div className="card-hover"></div>
                              <Card.Body className="over-body">
                                  <Card.Title>Hotels</Card.Title>
                                  <Card.Text>
                                      Learn about the two options for your stay in Orlando.
                                  </Card.Text>
                              </Card.Body>
                          </Card.ImgOverlay>
                          <div className="card-citation">
                          Fuller Street. BPA 2019 National Leadership Conference After Party. 2019. Fuller Street, http://www.fullerstreet.com/event-resume/bpa-2019-national-leadership-conference-after-party.html
                          </div>
                      </a>
                  </Card>
              </CardSection> 
        </div>
            */


//! IMPORTANT: Conference Image Reference: http://www.fullerstreet.com/images/resume/bpa-2019-6.jpg 