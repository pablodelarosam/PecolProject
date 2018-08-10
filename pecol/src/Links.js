import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Links extends Component {
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

          <Link className="custom-link" to="/activity">ACTIVIDADES
          </Link>

          <Link className="custom-link" to="/definition">DEFINICIONES
          </Link>

          <Link className="custom-link" to="/links">ENLANCES
          </Link>

          <Link className="custom-link" to="/home">CORREO
          </Link>

        </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
            <SideBar />
          </div>

          <div className="dashboard_content">
            <div className="col-sm-12 sideBar-left">
              <h2>Enlances</h2>
              <div className="container">

                  <div className="row">


                    <div className="col-sm-6" onClick={this.gotoCourseDetails}>
                        <h3> Tú eres un milagro </h3>
                  <iframe width="400" height="315" src="https://www.youtube.com/embed/U08mFi_5hzk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>


                    <div className="col-sm-6" onClick={this.gotoCourseDetails}>
                    <h3> El elefante encadenado </h3>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/X_qClSB0Du4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>

                  </div>




                </div>




              </div>
            </div>
          </div>
        </div>


    );
  }
}

export default Links;
