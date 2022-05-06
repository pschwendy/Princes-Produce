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
import MealKits from './components/pages/MealKits';
import Produce from './components/pages/Produce';

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
        <Route path='/meal-kits' component={MealKits} />
        <Route path='/produce-packages' component={Produce} />
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
