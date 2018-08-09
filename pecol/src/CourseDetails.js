import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './CourseDetails.css';
import human from './imgs/human.jpg'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import axios from 'axios';

import Signup from './Signup.js'

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: []
    };

  }

  componentDidMount() {
    axios.get(`http://localhost:3004/courseModules/3`).then(res => {
      const modules = res.data;

      this.setState({module: modules});
      console.log("module", this.state.module[0].idModule)
    })
  }

  gotoCourseDetails() {
    console.log("clicked")
  }

  render() {

    return (<div className="dashboard-top">
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

                <li className="nav-item">
                  <Link className="nav-link" to="/home">ACERCA DEL CURSO
                  </Link>
                </li>

              </ul>
            </div>

          </nav>

          <div className="dashboard_content">
            <div className="col-sm-12 sideBar-left">
              <h2>Módulos</h2>
              <div className="container">
                <div className="row">
                  {
                    this.state.module.map((data) => <div className="col-sm-6" key={data.idModule} onClick={this.gotoCourseDetails}>
                      <div className="card" style={{
                          width: '18rem'
                        }}>

                        <h5 class="card-header">{data.nameModule}</h5>
                        <div class="card-body">
                          <img className="module-img" src={"http://mastermosm.es/conte_ni_dos/uploads/2017/10/propuesta-valor-puzzle.jpg"}/>
                          <Link className=" module-button btn btn-primary" to="/module">Ir al módulo</Link>
                        </div>

                      </div>
                    </div>)
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>);
  }
}

export default CourseDetails;
