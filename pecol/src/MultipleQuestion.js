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
class MultipleQuestion extends Component {
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
      

          <div className="dashboard_content">
            <div className="col-sm-6 sideBar-left">
              <h2>Crossword view</h2>
              <div className="container">

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default MultipleQuestion;
