import React, { useState, useEffect } from 'react';
import {
    Button,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './css/MealKitCard.css';

function MealKitCard(props) {
  return (
      <Card className="meal-kit-card">
        <Card.Body className="meal-kit-body">
            <img className="meal-kit-image" src={props.src}></img>
            <Card.Text className="meal-name">
                {props.meal}
            </Card.Text>
            <Button className="order-button">ORDER NOW</Button>
        </Card.Body>
      </Card>
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default MealKitCard;
