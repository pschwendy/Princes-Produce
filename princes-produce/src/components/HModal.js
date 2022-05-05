import React, { useState, useEffect } from 'react';
import { 
  Modal, 
  Button, 
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl
} from 'react-bootstrap';
import './css/HNavBar.css';
import './css/HModal.css';

function ModalNav(){
  let hash = window.location.hash
}
function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="inherit"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="">
            Book your trip now!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div id="searchWidget" className="expedia-widget"><iframe id="widgetIframe" className="expedia-frame"src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=1&tp1=79938273458&tp2=&lob=F&des=Orlando, Fl&wbi=2&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=2&sfs=H300FW600F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>
        </Modal.Body>
      </Modal>
    );
  }
  /*
  <div id="searchWidget" style="width:300px;height:600px;">
        <iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=1&tp1=&tp2=&lob=H,FH,F&des=Orlando, Fl&wbi=1&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=0000FF&wbf=4&bfc=3D3100&wws=1&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
  </div>
         */
  function HModal(){
    const [modalShow, setModalShow] = React.useState(false);  
    return(
      <>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>Book Now!</Button>
      <CenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
      </>);
  }
  export default HModal;

  /*
  <nav class="navbar navbar-expand-lg navbar-light modal-nav float-right">
            <a class="navbar-brand"></a>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                  <a class="nav-link nav-item active" href="#">Travel<span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">Register</a>
                  <a class="nav-item nav-link" href="#">About</a>
              </ul>
            </div>
          </nav>*/