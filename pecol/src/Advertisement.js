import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './Advertisement.css';

import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import human from './imgs/human.jpg'
import Signup from './Signup.js'
import axios from 'axios';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
 axios.get(`http://localhost:3004/advertisements`)
   .then(res => {
     const courses = res.data;

     this.setState({advertisement: courses });
    //   console.log("course", this.state.course[0].idCOURSE)
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



            <div className="col-sm-9 sideBar-left">
              <h2>Avisos</h2>
              <div className="container">
                <div className="row">
                  {this.state.advertisement.map((data) =>
                    <div className="col-sm-6">


                      <div className="card custom-card" style={{
                        width: '18rem'
                      }}>
                        <img className="card-img-top" src={data.image} alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          <p className="card-text">{data.description}</p>

                        </div>
                      </div>
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

      export default Advertisement;
