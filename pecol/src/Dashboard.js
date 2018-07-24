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
class Dashboard extends Component {
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

    <div className="col-sm-3">
      <h2> Dashboard screen </h2>
    </div>
  </div>


  </div>

);
  }
}

export default Dashboard;
