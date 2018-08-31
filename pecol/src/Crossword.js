import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './Crossword.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Crossword extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log("Crossword details", this.props)

  }

  render() {
    return (


              <div className="">


                  <div className="container container-crossword">
                      <h2>Crossword view</h2>

                      <img src=""/>

                      <div className="row">
                        <div className="col-sm-6">

                        <input type="text" />

                        </div>

                        <div className="col-sm-6">
                           <input type="text" />
                        </div>

                      </div>

                  </div>

              </div>


    );
  }
}

export default Crossword;
