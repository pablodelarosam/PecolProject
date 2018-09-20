import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './Advertisement.css';
import NavBarDash from './NavBarDash.js';

import carmen from './carmen.jpeg' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import human from './imgs/human.jpg'
import Signup from './Signup.js'
import axios from 'axios';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class Advertisement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertisement: []
    }

  }

  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/advertisements`).then(res => {
      const courses = res.data;

      this.setState({advertisement: courses});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
  }

  render() {

    return (<div className="dashboard-top">
      <div>
        <NavBarDash idStudent={this.props.match.params.id}/>
      </div>
      <div className="row">
        <div className="mainContent">
          <div className="announcements">
            <div className="col-sm-12">
              <h2>Avisos</h2>
              <div className="container">
                <div className="row">
                  {
                    this.state.advertisement.map((data) => <div className="row">
                      <div className="col-lg-3">
                        <img className="card-img-top" src={data.image} alt="Card image cap"/>
                      </div>
                      <div className="col-lg-9">
                        <div className="row">
                          <h1>
                            {data.title}
                          </h1>
                        </div>
                        <div className="row">
                          <h4>
                            {data.description}
                          </h4>
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

export default Advertisement;
