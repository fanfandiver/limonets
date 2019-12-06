import React, { Component } from 'react';
import './Contact.css';
import { Col,
  Row,
  Container, } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MapContact from '../components/MapContact';
import FormContact from '../components/FormContact';


class Contact extends Component {
  render() {
    return (
        <div className="contact">
          <NavBar/>
          <h2 className="titleContact">Contactez-Nous</h2>
          <Container  style={{  padding: "0px 0px 140px 0px"}}>
          <Row>
            <Col>
              <FormContact/>
            </Col>
              <div>
                <hr className="separation" />
              </div> 
            <Col>
              <MapContact/>
            </Col>
          </Row>
          </Container>
          <Footer/>
        </div>
    );
  }
}
export default Contact;