import React, { Component } from 'react';
import './Gallery.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
 
class Gallery extends Component {
  constructor () {
    super();
  }

  render() {  
    return (
        <div>
          <NavBar/>
            <body>
              <div id="box1">
               <h1 className="titleHome">titre</h1>
              </div>
              <div id="box2">
               <h1 className="titleHome">titre</h1>
              </div>
              <div id="box3">
               <h1 className="titleHome">titre</h1>
              </div>
              <div id="box4">
               <h1 className="titleHome">titre</h1>
              </div>
              <div id="box5">
               <h1 className="titleHome">titre</h1>
              </div>
              <div id="box6">
               <h1 className="titleHome">titre</h1>
              </div>
            </body>
          <Footer/>
        </div>
    );
  }
}
export default Gallery;