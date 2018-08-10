import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';

import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import gabriela from './imgs/gaby.jpeg'
import teacher from './imgs/teacher.jpg'
import secondteacher from './imgs/teacher-two.jpg'



import Signup from './Signup.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Teacher extends Component {
  constructor(props) {
    super(props);



  }



  render() {


    return (
      <div className="dashboard-top">
        <div>
          <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
            <SideBar />
          </div>

          <div className="dashboard_content">
            <div className="col-sm-12 sideBar-left">
              <h2>Profesores</h2>
              <div className="container">
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={gabriela} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Gabriela Anaya</h5>
                    <p className="card-text">Licenciada en ciencias de la familia.</p>
                    <p className="card-text">Diplomados en bioética, familias disfuncionales.</p>
                    <p className="card-text">Experiencia laboral por más de 18 años.</p>
                    <a href="#" class="btn btn-primary">Conoce más</a>
                  </div>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Teacher;
