import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import NavBar from './NavBar.js'
import carmen from './carmen.jpeg' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkPecol: []
    }
  }


  componentDidMount() {
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/getLinks`)
     .then(res => {
       const rule = res.data;
       console.log("links", rule)
       this.setState({linkPecol: rule });
        console.log("links", this.state.linkPecol)
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

          <Link className="custom-link" to={`/activity/${this.props.match.params.idStudent}/${this.props.match.params.idModule}/${this.props.match.params.idCourse}`}>ACTIVIDADES
          </Link>

          <Link className="custom-link" to={`/module/${this.props.match.params.idStudent}/${this.props.match.params.idModule}/${this.props.match.params.idCourse}`}>INFORMACIÓN
          </Link>


          <Link className="custom-link" to={`/links/${this.props.match.params.idStudent}/${this.props.match.params.idModule}/${this.props.match.params.idCourse}`}>ENLANCES
          </Link>

          <Link className="custom-link" to="/home">CORREO
          </Link>


        </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
            <SideBar idStudent={this.props.match.params.idStudent} />
          </div>

          <div className="dashboard_content">
            <div className="col-sm-12 sideBar-left">
              <h2>Enlances</h2>
              <div className="container">

                  <div className="row">

                      {this.state.linkPecol.map((data) =>
                    <div className="col-sm-6" >
                        <h3> {data.nombreEnlace} </h3>
                  <iframe width="400" height="315" src={data.urlEnlace} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                  )}







                </div>




              </div>
            </div>
          </div>
        </div>

        </div>


    );
  }
}

export default Links;
