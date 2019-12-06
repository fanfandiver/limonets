import React, {Component} from 'react';
import MapFooter from './MapFooter'
import './Footer.css';
import { Col, Row } from 'react-bootstrap';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
          <div>
            <Row style={{ backgroundColor: "#1e145f", fontFamily: "Ubuntu" }}>
              <Col style={{ padding: "60px 50px 30px 270px", color: "white"}}>
                <h1>Contact</h1>
                <p>Numéro: +33 7 79 83 87 13</p>
                <p>Contactez-nous</p>
              </Col>
              <Col style={{ padding: "60px 0px 0px 0px", color: "white"}}>
                <h1>Adresse</h1>
                <p>Rue: bla bla bla bla </p>
                <p>Ville: Limonets 69760 </p>    
              </Col>
              <Col style={{ padding: "30px 0px 20px 0px" }}>  
                <MapFooter/>
              </Col>
            </Row>
          </div>
        )
    }
}

export default Footer;