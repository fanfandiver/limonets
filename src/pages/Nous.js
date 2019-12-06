import React, { Component } from 'react';
import './Nous.css';
import { Col,
  Row,
  Container, } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


class Nous extends Component {
  render() {
    return (
        <div>
          <NavBar/>
             <h1 style={{textAlign: "center", padding: "60px 0px 60px 0px"}}> Qui sommes-nous</h1>
             <Container>
               <Row>
                 <Col>
                    <div>
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                      <img style={{ height: "400px", width: "400px" }} src="https://picsum.photos/200/300?grayscale" alt="photo1"/>
                    </div>
                </Col>
                <Col>
                  <div>
                    <img style={{ height: "400px", width: "400px" }} src="https://picsum.photos/200/300?grayscale" alt="photo1"/> 
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </Col>
               </Row>
              </Container>
          <Footer/>
        </div>
    );
  }
}
export default Nous;