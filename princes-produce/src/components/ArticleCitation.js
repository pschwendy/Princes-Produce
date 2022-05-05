/*
Component to organize and create citations for article sections
*/


import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
function ArticleCitation(props) {
    return (
        <div class="article-citation">{props.citation}</div>
    );   
}

export default ArticleCitation;