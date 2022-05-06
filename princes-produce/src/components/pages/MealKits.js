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
import gnocchi from './assets/gnocchi.jpg';
import caeser from './assets/caeser.jpg';
import pizza from './assets/pizza.jpg';
import tonkatsu from './assets/tonkatsu.jpg';
import berry from './assets/berry.jpg';
import spaghett from './assets/spaghetti.jpg';
import minestrone from './assets/minestrone.jpg';
import avocado from './assets/avacado.jpg';
import buddha from './assets/buddha.jpg';
import carrot from './assets/carrot.jpg';
import mushroom from './assets/mushroom.jpg';
import feta from './assets/feta.jpg';
import burrito from './assets/burrito.jpg';
import beef from './assets/Beef Bourguignon.jpg';
import pina from './assets/pina.jpg';
import MealKitCard from '../MealKitCard.js';

function MealKits(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            
            <div className="scroll-body" style={{background: 'rgb(0, 74, 173)'}}>
                <div className="center-parent" style={{height: '60vh'}}>
                    <div className='centered-div'>
                        <h1 className='heading' style={{color: 'white'}}>Browse Our Meals</h1>
                        <p style={{color: 'white', textAlign: 'center'}}>Take home the Prince's Produce experience. Try our Meal Kits and unleash your inner chef!</p>
                    </div>
                </div>
                <div className="container">
                    <h2 className='heading' style={{paddingBottom: '40px', paddingLeft: '5px', fontWeight: '700', textAlign: "left", fontFamily: "Inter", color: 'white', fontSize: '2.5em'}}>ENTREES</h2>
                    <CardSection>
                        <MealKitCard src={gnocchi} meal="Chicken Gnocchi Skillet"></MealKitCard>
                        <MealKitCard src={caeser} meal="Chicken Caesar Salad"></MealKitCard>
                        <MealKitCard src={pizza} meal="Margherita Pizza"></MealKitCard>
                        <MealKitCard src={tonkatsu} meal="Tonkatsu and Rice"></MealKitCard>
                        
                        <MealKitCard src={spaghett} meal="Spaghetti alla Puttanesca"></MealKitCard>
                        <MealKitCard src={minestrone} meal="Minestrone Soup"></MealKitCard>
                        <MealKitCard src={avocado} meal="Turkey Avocado Sandwich"></MealKitCard>
                        <MealKitCard src={buddha} meal="Stir Fry Buddha Bowl"></MealKitCard>
                        
                        <MealKitCard src={mushroom} meal="Mushroom, Spinach Lasagna"></MealKitCard>
                        <MealKitCard src={feta} meal="Quinoa Tabbouleh Feta Salad"></MealKitCard>
                        <MealKitCard src={burrito} meal="Bean Burrito"></MealKitCard>
                        <MealKitCard src={beef} meal="Beef Bourguignon"></MealKitCard>
                        
                    </CardSection>
                    <h2 className='heading' style={{paddingTop: '40px', paddingBottom: '40px', paddingLeft: '5px', fontWeight: '700', textAlign: "left", fontFamily: "Inter", color: 'white', fontSize: '2.5em'}}>DESSERTS</h2>
                    <CardSection>
                        <MealKitCard src={berry} meal="Berry Crumble"></MealKitCard>
                        <MealKitCard src={carrot} meal="Carrot Cake"></MealKitCard>
                        <MealKitCard src={pina} meal="Strawberry Smoothie"></MealKitCard>
                    </CardSection>
                </div>
            </div>
        </div>
    );
}

export default MealKits;