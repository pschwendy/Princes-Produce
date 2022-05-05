/*
Templated food page
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
    const articles = []
    console.log(props.content[0]);
    props.content.forEach((article) => {
            const hours = [];
            article.hours.forEach((hour) =>
                hours.push(
                    <li>{hour.when}{hour.times}</li>
                )
            );
            articles.push(
                <div className="alt-1">
                    <h2 className="heading">{article.name} ({article.pricing})</h2>
                    <hr className="the-hr"></hr>
                    <div className="row article mb-4">
                        <div className="col-md mr-3">
                            <p>
                                {article.description}
                            </p>
                            <p className="">
                                <a target="_blank" href={article.website}>Learn More</a>
                            </p>
                            <p> Address: {article.address}</p>
                            <p><a target="_blank" href={article.menu}>Menu</a>{article.menuInfo}</p>
                            <p>
                                Hours:
                            </p>
                            <ul>
                                {hours}
                            </ul>
                        </div>
                        <div className="col">
                            <img className="img-fluid centered-article article-image" alt="article-image" src={article.image} />
                            <ArticleCitation citation={article.citation} />
                        </div>
                    </div>
                </div>
            );
        }
    )
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image={props.hero}
                    height='60'
                    filter='60'
                ></HeroSection>
                <div className='small-centered'>
                    <h1 className="centered-title">{props.type}</h1>
                </div>
            </div>
            <div className="overdiv-2">
                <div className="container mb-4">
                    <HCitation citation={props.heroCitation}></HCitation>
                    {articles}
                </div>  
            </div>
        </div>
    );
}

export default ExFoodSingle;