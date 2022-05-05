/*
Component to store cards
*/

import React, { useState, useEffect } from 'react';
import {
  CardColumns,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardSection(props) {
  return (
    <div className='card-parent'>
      <CardColumns>{props.children}</CardColumns>
    </div>
  );
}

export default CardSection;
