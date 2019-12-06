import React, { Component } from 'react';
import { Col,
         Row,
         Carousel } from 'react-bootstrap';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";
import picto_budget from '../asset/picto_budget.svg';
import picto_metres from '../asset/picto_metres.svg';
import belle_etoile from '../asset/belle_etoile.jpg';
import duplex_rdc from '../asset/duplex_rdc.jpg';
import studio from '../asset/studio.jpg';
import TypeWriter from '../components/TypeWriter';

class HomePage extends Component {
  render() {
    return (
        <div className="boddy">
          <NavBar/>  
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={belle_etoile}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel_title">voyages d'affaires</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100" 
                  src={duplex_rdc}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="carousel_title">Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100" 
                  src={studio}
                  alt="Third slide"
                />
                <Carousel.Caption> 
                  <h3 className="carousel_title">Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>   
            <Row style={{backgroundColor: "#FAE5D3", height: "300px" }}>
              <Col style={{ textAlign: "center", paddingTop: "60px" }}>
                <Link to={"/Gallery"} style={{textDecoration: "none"}}>
                   <img className="picto" src={picto_metres} alt="picto_metres"/>
                   <p className="picto_text1">Appartements Meublés</p>
                   <p className="picto_text2">A partire de 50M2</p>
                </Link>
              </Col>
              <Col style={{ textAlign: "center", paddingTop: "60px" }}>
                <Link to={"/Reservation"} style={{textDecoration: "none"}}>
                   <img className="picto" src={picto_budget} alt="picto_budget"/>
                   <p className="picto_text1">Séjours</p>
                   <p className="picto_text2">Nuits, semaine, mois</p>
                </Link>
              </Col>
            </Row>
          <Footer/>
        </div>
    );
  }
}
export default HomePage;