/*
Templated sightseeing page
Renders html differently based on props parameter
*/

import React, { useState, useEffect, Component } from 'react';
import HeroSection from '../HeroSection.js';
import ArticleCitation from '../ArticleCitation';
import HCitation from '../HCitation';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import './css/ExFood.css';
import '../css/main.css';

//input: props - contains variable information to input into template
function ExFoodSingle(props){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image={props.hero}
                    height='60'
                    filter='60'
                ></HeroSection>
                <div className='small-centered'>
                    <h1 className="centered-title">{props.title}</h1>
                </div>
            </div>
            <div className="overdiv-2">
                <div className="container mb-4">
                    <HCitation citation={props.heroCitation} />
                    <div className="alt-1">
                        <div className="row article mb-4">
                            <div className="col-md mr-3">
                                <p>
                                    {props.blurb}
                                </p>
                                <p>
                                    {props.hours}
                                </p>
                                <p>
                                    {props.prices}
                                </p>
                                <p className="">
                                    <a target="_blank" href={props.website}>Learn More</a>
                                </p>
                            </div>
                            <div className="col">
                                <img className="img-fluid centered-article article-image" alt="article-image" src={props.image} />
                                <ArticleCitation citation={props.citation} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ExFoodSingle;