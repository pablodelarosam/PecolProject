import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Module.css';
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
class  Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModule:[]
    };
  }


  componentDidMount() {
  axios.get(`http://localhost:3004/currentModule/1`)
   .then(res => {
     const modules = res.data;

     this.setState({currentModule: modules });
       console.log("currentModule", this.state.currentModule[0].idModule)
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
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
            <SideBar />
          </div>

          <div className="dashboard_content">
          {this.state.currentModule.map((data) =>
            <div className="col-sm-9 sideBar-left right-part" key={data.idModule}>


              <div className="container-module">
              <div className="row">
              </div>
              <div className="col-sm-6">
                <h2>{data.nameModule}</h2>
              <p> {data.moduleDescription} </p>
              </div>

              <div className="col-sm-6">
              </div>
              </div>
                    </div>
                )}

      </div>
      </div>
      </div>


    );
  }
}

export default Module;
