import React, { Component } from 'react';
import './Reservation.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class Reservation extends Component {
  render() {
    return (
        <div>
          <NavBar/>
          <Footer/>
        </div>
    );
  }
}
export default Reservation;