import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Carousel,
  CarouselItem,
} from 'react-bootstrap';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HNavBar from './components/HNavBar.js';
import HFooter from './components/HFooter.js';
import Home from './components/pages/Home.js';
import Hotels from './components/pages/Hotels';
import ExTransportation from './components/pages/ExTransportation';
import ExFood from './components/pages/ExFood';
import ExSightseeing from './components/pages/ExSightseeing';
import ExAttractions from './components/pages/ExAttractions';
import { foodInputs } from './components/inputs/FoodInputs.js';
import ExFoodSingle from './components/pages/ExFoodSingle';
import { sightseeingInputs } from './components/inputs/SightseeingInputs.js';
import ExSightseeingSingle from './components/pages/ExSightseeingSingle';
import { attractionInputs } from './components/inputs/AttractionInputs.js';
import ExAttractionsSingle from './components/pages/ExAttractionsSingle';
import DisneyPage from './components/pages/DisneyPage';
import SpringsFood from './components/pages/SpringsFood';
import SpringsRec from './components/pages/SpringsRec';
import YachtFood from './components/pages/YachtFood';
import YachtRec from './components/pages/YachtRec';
import GeneralInfo from './components/pages/GeneralInfo';
import Travel from './components/pages/Travel';
import Schedule from './components/pages/Schedule';
import About from './components/pages/About';
import Citations from './components/pages/Citations';

function App() {
  const templatedPages = [];
  foodInputs.forEach((article) => {
    templatedPages.push(
      <Route path={article.route} component={ExFoodSingle} children={ 
        <ExFoodSingle
          type = {article.type}
          content = {article.content}
          hero = {article.hero}
          heroCitation = {article.heroCitation}
        />
      } />
    );
  });
  
  sightseeingInputs.forEach((article) => {
    templatedPages.push(
      <Route path={article.route} component={ExSightseeingSingle} children={ 
        <ExSightseeingSingle
          title = {article.title}
          blurb = {article.blurb}
          website = {article.website}
          prices = {article.prices}
          hours = {article.hours}
          image = {article.image}
          citation = {article.citation}
          hero = {article.hero}
          heroCitation = {article.heroCitation}
        />
      } />
    );
  });

  attractionInputs.forEach((article) => {
    templatedPages.push(
      <Route path={article.route} component={ExAttractionsSingle} children={ 
        <ExAttractionsSingle
          title = {article.title}
          description = {article.description}
          websites = {article.websites}
          pricing = {article.pricing}
          hours = {article.hours}
          image = {article.image}
          restrictions = {article.restrictions}
          restrictionInfo = {article.restrictionInfo}
          citation = {article.citation}
          hero = {article.hero}
          heroCitation = {article.heroCitation}
        />
      } />
    );
  });
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <HNavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore-transportation' component={ExTransportation} />
        <Route path='/explore-food' component={ExFood} />
        <Route path='/explore-sightseeing' component={ExSightseeing} />
        <Route path='/explore-attractions' component={ExAttractions} />
        {templatedPages}
        <Route path='/explore-attractions-disney' component={DisneyPage} />
        <Route path='/hotels' component={Hotels} />
        <Route path='/corondo-springs-food' component={SpringsFood} />
        <Route path='/corondo-springs-recreation' component={SpringsRec} />
        <Route path='/yacht-club-food' component={YachtFood} />
        <Route path='/yacht-club-recreation' component={YachtRec} />
        <Route path='/general-info' component={GeneralInfo} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/travel' component={Travel} />
        <Route path='/about-us' component={About} />
        <Route path='/citations' component={Citations} />
      </Switch>
      <footer>
        <HFooter />
      </footer>
    </HashRouter>
  );
}

export default App;
/*      
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
*/


/*
Old Routes: FOOD
<Route path='/explore-food-italian' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[0].type}
          content = {foodInputs[0].content}
          hero = {foodInputs[0].hero}
          heroCitation = {foodInputs[0].heroCitation}
        />} />
        <Route path='/explore-food-asian' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[1].type}
          content = {foodInputs[1].content}
          hero = {foodInputs[1].hero}
          heroCitation = {foodInputs[1].heroCitation}
        />} />
        <Route path='/explore-food-hispanic' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[2].type}
          content = {foodInputs[2].content}
          hero = {foodInputs[2].hero}
          heroCitation = {foodInputs[2].heroCitation}
        />} />
        <Route path='/explore-food-fusion' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[3].type}
          content = {foodInputs[3].content}
          hero = {foodInputs[3].hero}
          heroCitation = {foodInputs[3].heroCitation}
        />} />
        <Route path='/explore-food-american' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[4].type}
          content = {foodInputs[4].content}
          hero = {foodInputs[4].hero}
          heroCitation = {foodInputs[4].heroCitation}
        />} />
        <Route path='/explore-food-african' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[5].type}
          content = {foodInputs[5].content}
          hero = {foodInputs[5].hero}
          heroCitation = {foodInputs[5].heroCitation}
        />} />


SIGHTSEEING:
<Route path='/explore-sightseeing-harry-p-leu-gardens' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[0].title}
            blurb = {sightseeingInputs[0].blurb}
            website = {sightseeingInputs[0].website}
            prices = {sightseeingInputs[0].prices}
            hours = {sightseeingInputs[0].hours}
            image = {sightseeingInputs[0].image}
            citation = {sightseeingInputs[0].citation}
            hero = {sightseeingInputs[0].hero}
            heroCitation = {sightseeingInputs[0].heroCitation}
        />} />
        <Route path='/explore-sightseeing-florida-tours' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[1].title}
            blurb = {sightseeingInputs[1].blurb}
            website = {sightseeingInputs[1].website}
            prices = {sightseeingInputs[1].prices}
            hours = {sightseeingInputs[1].hours}
            image = {sightseeingInputs[1].image}
            citation = {sightseeingInputs[1].citation}
            hero = {sightseeingInputs[1].hero}
            heroCitation = {sightseeingInputs[1].heroCitation}
        />} />
        <Route path='/explore-sightseeing-tibet-butler-preserve' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[2].title}
            blurb = {sightseeingInputs[2].blurb}
            website = {sightseeingInputs[2].website}
            prices = {sightseeingInputs[2].prices}
            hours = {sightseeingInputs[2].hours}
            image = {sightseeingInputs[2].image}
            citation = {sightseeingInputs[2].citation}
            hero = {sightseeingInputs[2].hero}
            heroCitation = {sightseeingInputs[2].heroCitation}
        />} />
        <Route path='/explore-sightseeing-lake-eola-park' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[3].title}
            blurb = {sightseeingInputs[3].blurb}
            website = {sightseeingInputs[3].website}
            prices = {sightseeingInputs[3].prices}
            hours = {sightseeingInputs[3].hours}
            image = {sightseeingInputs[3].image}
            citation = {sightseeingInputs[3].citation}
            hero = {sightseeingInputs[3].hero}
            heroCitation = {sightseeingInputs[3].heroCitation}
        />} />
        <Route path='/explore-sightseeing-exotic-animals' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[4].title}
            blurb = {sightseeingInputs[4].blurb}
            website = {sightseeingInputs[4].website}
            prices = {sightseeingInputs[4].prices}
            hours = {sightseeingInputs[4].hours}
            image = {sightseeingInputs[4].image}
            citation = {sightseeingInputs[4].citation}
            hero = {sightseeingInputs[4].hero}
            heroCitation = {sightseeingInputs[4].heroCitation}
        />} />
        <Route path='/explore-sightseeing-butler-chain-lakes' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[5].title}
            blurb = {sightseeingInputs[5].blurb}
            website = {sightseeingInputs[5].website}
            prices = {sightseeingInputs[5].prices}
            hours = {sightseeingInputs[5].hours}
            image = {sightseeingInputs[5].image}
            citation = {sightseeingInputs[5].citation}
            hero = {sightseeingInputs[5].hero}
            heroCitation = {sightseeingInputs[5].heroCitation}
        />} />
        <Route path='/explore-sightseeing-kissimmee-swamp-tours' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[6].title}
            blurb = {sightseeingInputs[6].blurb}
            website = {sightseeingInputs[6].website}
            prices = {sightseeingInputs[6].prices}
            hours = {sightseeingInputs[6].hours}
            image = {sightseeingInputs[6].image}
            citation = {sightseeingInputs[6].citation}
            hero = {sightseeingInputs[6].hero}
            heroCitation = {sightseeingInputs[6].heroCitation}
        />} />
        <Route path='/explore-sightseeing-winter-park-boat-tour' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[7].title}
            blurb = {sightseeingInputs[7].blurb}
            website = {sightseeingInputs[7].website}
            prices = {sightseeingInputs[7].prices}
            hours = {sightseeingInputs[7].hours}
            image = {sightseeingInputs[7].image}
            citation = {sightseeingInputs[7].citation}
            hero = {sightseeingInputs[7].hero}
            heroCitation = {sightseeingInputs[7].heroCitation}
        />} />
        <Route path='/explore-sightseeing-wildlife-attractions' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[8].title}
            blurb = {sightseeingInputs[8].blurb}
            website = {sightseeingInputs[8].website}
            prices = {sightseeingInputs[8].prices}
            hours = {sightseeingInputs[8].hours}
            image = {sightseeingInputs[8].image}
            citation = {sightseeingInputs[8].citation}
            hero = {sightseeingInputs[8].hero}
            heroCitation = {sightseeingInputs[8].heroCitation}
        />} />


ATTRACTIONS
<Route path='/explore-attractions-water-attractions' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[0].title}
            description = {attractionInputs[0].description}
            websites = {attractionInputs[0].websites}
            pricing = {attractionInputs[0].pricing}
            hours = {attractionInputs[0].hours}
            image = {attractionInputs[0].image}
            restrictions = {attractionInputs[0].restrictions}
            restrictionInfo = {attractionInputs[0].restrictionInfo}
            citation = {attractionInputs[0].citation}
            hero = {attractionInputs[0].hero}
            heroCitation = {attractionInputs[0].heroCitation}
        />} />
        <Route path='/explore-attractions-ripleys' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[1].title}
            description = {attractionInputs[1].description}
            websites = {attractionInputs[1].websites}
            pricing = {attractionInputs[1].pricing}
            hours = {attractionInputs[1].hours}
            image = {attractionInputs[1].image}
            restrictions = {attractionInputs[1].restrictions}
            restrictionInfo = {attractionInputs[1].restrictionInfo}
            citation = {attractionInputs[1].citation}
            hero = {attractionInputs[1].hero}
            heroCitation = {attractionInputs[1].heroCitation}
        />} />
        <Route path='/explore-attractions-museum-of-art' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[2].title}
            description = {attractionInputs[2].description}
            websites = {attractionInputs[2].websites}
            pricing = {attractionInputs[2].pricing}
            hours = {attractionInputs[2].hours}
            image = {attractionInputs[2].image}
            restrictions = {attractionInputs[2].restrictions}
            restrictionInfo = {attractionInputs[2].restrictionInfo}
            citation = {attractionInputs[2].citation}
            hero = {attractionInputs[2].hero}
            heroCitation = {attractionInputs[2].heroCitation}
        />} />
        <Route path='/explore-attractions-chocolate-kingdom' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[3].title}
            description = {attractionInputs[3].description}
            websites = {attractionInputs[3].websites}
            pricing = {attractionInputs[3].pricing}
            hours = {attractionInputs[3].hours}
            image = {attractionInputs[3].image}
            restrictions = {attractionInputs[3].restrictions}
            restrictionInfo = {attractionInputs[3].restrictionInfo}
            citation = {attractionInputs[3].citation}
            hero = {attractionInputs[3].hero}
            heroCitation = {attractionInputs[3].heroCitation}
        />} />
        <Route path='/explore-attractions-escape-room' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[4].title}
            description = {attractionInputs[4].description}
            websites = {attractionInputs[4].websites}
            pricing = {attractionInputs[4].pricing}
            hours = {attractionInputs[4].hours}
            image = {attractionInputs[4].image}
            restrictions = {attractionInputs[4].restrictions}
            restrictionInfo = {attractionInputs[4].restrictionInfo}
            citation = {attractionInputs[4].citation}
            hero = {attractionInputs[4].hero}
            heroCitation = {attractionInputs[4].heroCitation}
        />} />
        <Route path='/explore-attractions-ifly' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[5].title}
            description = {attractionInputs[5].description}
            websites = {attractionInputs[5].websites}
            pricing = {attractionInputs[5].pricing}
            hours = {attractionInputs[5].hours}
            image = {attractionInputs[5].image}
            restrictions = {attractionInputs[5].restrictions}
            restrictionInfo = {attractionInputs[5].restrictionInfo}
            citation = {attractionInputs[5].citation}
            hero = {attractionInputs[5].hero}
            heroCitation = {attractionInputs[5].heroCitation}
        />} />
        <Route path='/explore-attractions-kennedy-space-center' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[6].title}
            description = {attractionInputs[6].description}
            websites = {attractionInputs[6].websites}
            pricing = {attractionInputs[6].pricing}
            hours = {attractionInputs[6].hours}
            image = {attractionInputs[6].image}
            restrictions = {attractionInputs[6].restrictions}
            restrictionInfo = {attractionInputs[6].restrictionInfo}
            citation = {attractionInputs[6].citation}
            hero = {attractionInputs[6].hero}
            heroCitation = {attractionInputs[6].heroCitation}
        />} />
        <Route path='/explore-attractions-indoor-karting' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[7].title}
            description = {attractionInputs[7].description}
            websites = {attractionInputs[7].websites}
            pricing = {attractionInputs[7].pricing}
            hours = {attractionInputs[7].hours}
            image = {attractionInputs[7].image}
            restrictions = {attractionInputs[7].restrictions}
            restrictionInfo = {attractionInputs[7].restrictionInfo}
            citation = {attractionInputs[7].citation}
            hero = {attractionInputs[7].hero}
            heroCitation = {attractionInputs[7].heroCitation}
        />} />
        <Route path='/explore-attractions-science-center' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[8].title}
            description = {attractionInputs[8].description}
            websites = {attractionInputs[8].websites}
            pricing = {attractionInputs[8].pricing}
            hours = {attractionInputs[8].hours}
            image = {attractionInputs[8].image}
            restrictions = {attractionInputs[8].restrictions}
            restrictionInfo = {attractionInputs[8].restrictionInfo}
            citation = {attractionInputs[8].citation}
            hero = {attractionInputs[8].hero}
            heroCitation = {attractionInputs[8].heroCitation}
        />} />
        <Route path='/explore-attractions-icon-park' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[9].title}
            description = {attractionInputs[9].description}
            websites = {attractionInputs[9].websites}
            pricing = {attractionInputs[9].pricing}
            hours = {attractionInputs[9].hours}
            image = {attractionInputs[9].image}
            restrictions = {attractionInputs[9].restrictions}
            restrictionInfo = {attractionInputs[9].restrictionInfo}
            citation = {attractionInputs[9].citation}
            hero = {attractionInputs[9].hero}
            heroCitation = {attractionInputs[9].heroCitation}
        />} />
        <Route path='/explore-attractions-universal' component={ExAttractionsSingle} children={ 
          <ExAttractionsSingle
            title = {attractionInputs[10].title}
            description = {attractionInputs[10].description}
            websites = {attractionInputs[10].websites}
            pricing = {attractionInputs[10].pricing}
            hours = {attractionInputs[10].hours}
            image = {attractionInputs[10].image}
            restrictions = {attractionInputs[10].restrictions}
            restrictionInfo = {attractionInputs[10].restrictionInfo}
            citation = {attractionInputs[10].citation}
            hero = {attractionInputs[10].hero}
            heroCitation = {attractionInputs[10].heroCitation}
        />} />
*/