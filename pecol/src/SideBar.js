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
import User from './imgs/user.png'
import  Signup  from './Signup.js'
import './SideBar.css'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class SideBar extends Component {
  constructor(props) {
  super(props);




}



  render() {


return (
  <div className="sidebar">

    <img src={User} className="user-image"/>
    <h3> Username </h3>
    <div className="line">
      </div>
      <Link className="nav-link" to="/home">Avances del curso
      </Link>

      <Link className="nav-link" to="/home">Historial de actividades
      </Link>

      <Link className="nav-link" to="/home">Avisos
      </Link>

      <Link className="nav-link" to="/home">Profesores
      </Link>

      <Link className="nav-link" to="/home">Calificaciones
      </Link>

      <Link className="nav-link" to="/home">Historial académico
      </Link>

      <Link className="nav-link" to="/home">Normateca
      </Link>


      <Link className="nav-link" to="/home">Avances del curso
      </Link>

      <Link className="nav-link" to="/home">Salir
      </Link>

    </div>
);
  }
}

export default SideBar;
