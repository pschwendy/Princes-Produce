/*
Templated attraction page
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
function ExAttractionsSingle(props){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const prices = [];
    props.pricing.forEach((price) =>
        prices.push(
            <li>{price}</li>
        )
    );

    const hours = [];
    props.hours.forEach((hour) =>
        hours.push(
            <li>{hour}</li>
        )
    );

    const websites = [];
    props.websites.forEach((website) =>
        websites.push(
            <p><a target="_blank" href={website.site}>Learn More about {website.part}</a></p>
        )
    );

    const restrictions = [];
    props.restrictions.forEach((restriction) =>
        restrictions.push(
            <div><li>{restriction}</li></div>
        )
    );
    const info = [];
    props.restrictionInfo.forEach((link) =>
        info.push(
            <div><li><a target="_blank" href={link}>More Information</a></li></div>
        )
    );
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
            <div className="overdiv">
                <div className="container mb-4">
                    <HCitation citation={props.heroCitation}></HCitation>
                    <div className="alt-1">
                        <div className="row article mb-4">
                            <div className="col-md mr-3">
                                <p>
                                    {props.description}
                                </p>
                                <p>
                                    Hours:
                                </p>
                                <ul>{hours}</ul>
                                <p>Pricing: </p>
                                <ul>{prices}</ul>
                                <p>Security Restrictions:</p>
                                <ul>
                                    {restrictions}
                                    {info}
                                </ul>
                                <p className="">
                                    {websites}
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

export default ExAttractionsSingle;