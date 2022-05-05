/*
Component to organize and create citations for card items
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
function CardCitation(props) {
    return (
        <div class="card-citation">{props.citation}</div>
    );   
}

export default CardCitation;