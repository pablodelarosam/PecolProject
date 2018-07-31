import React, {Component} from 'react';
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



import  Signup  from './Signup.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class CourseDetails extends Component {
  constructor(props) {
  super(props);



}



  render() {


return (
  <div className="dashboard-top">
  <div className="row">
    <div className="col-sm-3">
      <SideBar/>
    </div>

    <div className="col-sm-9">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand anchorlogo" href="#"><img src={logoPe} className="logo"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">HOME
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ESCUELAS Y EMPRESAS</a>
          </li>

        </ul>
      </div>
      <ul class="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
    </div>
  </div>


  </div>

);
  }
}


export default CourseDetails;
