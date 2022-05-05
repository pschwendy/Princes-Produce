import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import './css/TextSection.css';

//const Navbar;
function TextSection(props) {
  const TextStyles = {
    height: `${props.height}vh`,
  };

  return (
    <div className='text-section' style={TextStyles}>
      {props.children}
    </div>
  );
}

export default TextSection;
