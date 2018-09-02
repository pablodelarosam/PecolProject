import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Normateca.css';
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import NavBar from './NavBar.js'
import Signup from './Signup.js'
import axios from 'axios';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Normateca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rulesPecol:[]

    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/rules`)
     .then(res => {
       const rule = res.data;
       console.log("rules", rule)
       this.setState({rulesPecol: rule });
        console.log("rules", this.state.rulesPecol)
     })
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
            <SideBar idStudent={this.props.match.params.id} />
          </div>

          <div className="dashboard_content col-sm-9">
            <div className="sideBar-left">
              <h2>Normateca</h2>
              <div className="container">
              {this.state.rulesPecol.map((data) =>

                <div key={data.idrule}>
                  <h4> {data.title }</h4>
                  <p> {data.description}</p>
                  <hr/>
                  </div>
                )}


            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}
export default Normateca;
