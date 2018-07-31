import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './ListCourses.css';

import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import human from './imgs/human.jpg'



import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class ListCourses extends Component {
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
    <h2>
      Cursos
    </h2>
    <div className="row">
      <div className="col-sm-6">

        <div className="card" style={{
          width: '18rem'
        }}>
          <img className="card-img-top" src={human} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">La excelencia del liderazgo a través de los valores</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Ir al curso</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card" style={{
          width: '18rem'
        }}>
          <img className="card-img-top" src={human} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">La excelencia del liderazgo a través de los valores</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Ir al curso</a>
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

export default ListCourses;
