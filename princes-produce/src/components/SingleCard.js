import React, { useState, useEffect } from 'react';
import {
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './css/SingleCard.css';

function SingleCard() {
  return (
    <div className='single-card-parent'>
      <Card className='places' style={{ border: 'dark' }}>
        <Card.Img
          src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
          alt='Card image'
          variant='top'
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            <div style={{ backgroundColor: 'blue' }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default SingleCard;
