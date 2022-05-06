/*
Footer component to be used on every page with routing to social media pages
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {
    Button
  } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './css/HFooter.css'
import bpalogo from './pages/assets/logo-transparent.png';

function HFooter(){
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const editSize = () => {
        setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', editSize);
    return(
        <div style={{'padding-top':'20px'}} className="foot">
            <div className="py-2 container">
            <div className={screenSize > 800 ? "row": "row text-center"}>
                <div className="col-md ml-2 mb-4"><img className={screenSize > 768 ? "footer-logo pull-right img-fluid": "pull-right img-fluid"} src={bpalogo}></img></div>
                
                <div className="foot-txt col-md mb-4">
                    <h6 className="font-weight-bold">Huron BPA Chapter</h6>
                    <div className="foot-txt mb-3">
                    This website was made by the 2022 Start-Up Enterprise Team of the Huron BPA Chapter as a proof of concept of our . The Huron BPA Chapter recognizes the importance of sportsmanship within competitions and stresses the importance of community service. As a chapter, we pride ourselves in contributing to a passionate, diligent, and motivated community full of leaders and young scholars. 
                    </div>
                    <Button target="_blank" href="https://www.huronbpa.com/" variant="outline-success">Find out more</Button>
                </div>
                <div className="col">
                    <address className="page-list">
                        <a className='foot-a' href='#'>Home</a>
                        <br></br>
                        <a className='foot-a' href='#/produce-packages'>Produce Packages</a>
                        <br></br>
                        <a className='foot-a' href='#/meal-kits'>Meal Kits</a>
                        <br></br><a className='foot-a' href='#/about-us'>About Us</a>
                    </address>                
                </div>
            </div>
            </div>
            <hr></hr>
            <div className="container-fluid text-center">
                <div className="mb-2">
                    <div className={screenSize > 768 ? "big-ml":""}>
                        <div className="row mb-3 text-left">
                            <div className="col mx-2">
                            Experiencing problems? Email us at huron.bpa@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="row pb-2 mt-2">
                        <div className="col">
                            <a className="icon-inherit" href="mailto:huron.bpa@gmail.com"><FontAwesomeIcon size = '2x' icon={faPaperPlane} /></a>
                        </div>
                        <div class="col">
                            <a className="icon-inherit" target="_blank" href="https://github.com/Mrchow3/Huron2021WebsiteDesign"><FontAwesomeIcon size = '2x' icon={faCode} /></a>
                        </div>
                        <div class="col">
                            <a className="icon-inherit" target="_blank" href="https://twitter.com/National_BPA"><FontAwesomeIcon size = '2x' icon={faTwitter} /></a>
                        </div>
                        <div class="col">
                            <a className="icon-inherit" target="_blank" href="https://facebook.com/businessprofessionalsofamerica"><FontAwesomeIcon size = '2x' icon={faFacebook}  /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HFooter;