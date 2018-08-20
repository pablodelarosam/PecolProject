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
import axios from 'axios';
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


  componentDidMount() {
    console.log("PROPS SIDE BAR", this.props)
  }



  render() {
    return (
      <div className="sidebar">
      <div className="student-info">

      <p className="idstudent"> ID: {this.props.idStudent} </p>
      </div>
      <div className="line">
        </div>

        <Link className="nav-link" to="/academicHistory">Historial de actividades
        </Link>

        <Link className="nav-link" to={"/listCourses/" + this.props.idStudent}> Cursos
        </Link>

        <Link className="nav-link" to="/advertisement">Avisos
        </Link>

        <Link className="nav-link" to="/teacher">Profesores
        </Link>

        <Link className="nav-link" to="/grades">Calificaciones
        </Link>

        <Link className="nav-link" to="/academicHistory">Historial académico
        </Link>

        <Link className="nav-link" to="/normateca">Normateca
        </Link>


        <Link className="nav-link" to="/account">Estado de cuenta
        </Link>

        <Link className="nav-link" to="/home">Salir
        </Link>

      </div>
      );
  }
}

export default SideBar;
