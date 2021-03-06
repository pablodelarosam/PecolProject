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
import teacher from './imgs/teacher.jpg'
import secondteacher from './imgs/teacher-two.jpg'



import  Signup  from './Signup.js'

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
  <div className="row">
    <div className="col-sm-3">
      <SideBar/>
    </div>

    <div className="col-sm-9">
      <h2> Profesores </h2>

      <div className="row">
        <div className="col-sm-6">
        <div className="card" style={{
          width: '18rem'
        }}>
          <img className="card-img-top" src={teacher} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Chris Neil</h5>
            <p className="card-text">Profesor de psicología, especializado en el pensamiento humano.</p>
            <a href="#" class="btn btn-primary">Conoce más</a>
          </div>
        </div>
        </div>

        <div className="col-sm-6">
        <div className="card" style={{
          width: '18rem'
        }}>
          <img className="card-img-top" src={secondteacher} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Ricardo Huerta</h5>
                <p className="card-text">Profesor de psicología, especializado en el pensamiento humano.</p>
            <a href="#" class="btn btn-primary">Conoce más</a>
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

export default Teacher;
