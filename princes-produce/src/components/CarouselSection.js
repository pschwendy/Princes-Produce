/*
Component to store carousel sections
*/

import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
} from 'react-bootstrap';

import './css/CarouselSection.css';
import HeroSection from './HeroSection.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CarouselSection(props) {
  const CarouselStyles = {
    height: `${props.height}px`,
  };
  const [prevIcon] = useState(<span><FontAwesomeIcon size='3x' icon={faChevronLeft} /></span>);
  const [nextIcon] = useState(<span><FontAwesomeIcon size='3x' icon={faChevronRight} /></span>);
  return (
    <div className='carousel'>
      <Carousel prevIcon={prevIcon} nextIcon={nextIcon}> {props.children}</Carousel>
    </div>
  );
}

export default CarouselSection;

/*
 */
