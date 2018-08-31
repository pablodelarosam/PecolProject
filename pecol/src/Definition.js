import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Definition.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import axios from 'axios';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definition:[]
    };
  }


  componentDidMount() {
 axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/definitions`)
   .then(res => {
     const definitions = res.data;

     this.setState({definition: definitions });
       console.log("definition", this.state.definition[0].idDefinition)
   })
}

gotoCourseDetails() {
  console.log("clicked")
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

                        <Link className="custom-link" to="/home">ACTIVIDADES
                        </Link>

                        <Link className="custom-link" to="/definition">DEFINICIONES
                        </Link>

                        <Link className="custom-link" to="/home">ENLANCES
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
            <div className="col-sm-9 sideBar-left">
              <h2>Definiciones</h2>

                {this.state.definition.map((data) =>
                  <div className="container">
                      <h2> {data.nameDefinition} </h2>
                        <p> {data.descDefinition} </p>
                          </div>
                )}


            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Definition;
