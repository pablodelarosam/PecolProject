import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Account.css';

import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import  Signup  from './Signup.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Account extends Component {
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
      <h2> Estado de cuenta </h2>
    </div>
  </div>


  </div>

);
  }
}

export default Account;
