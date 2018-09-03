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
import camionero from './imgs/camionero.jpeg'
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
    const idStudent = this.props.match.params.idStudent
    const idC = this.props.match.params.idModule
     console.log("PROPS Module", this.props.match.params.idCourse, idC, this.props)
  axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/currentModule/${idC}`)
   .then(res => {
     const modules = res.data;

     this.setState({currentModule: modules });
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

            <Link className="custom-link" to={`/activity/${this.props.match.params.idStudent}/${this.props.match.params.idModule}/${this.props.match.params.idCourse}`}>ACTIVIDADES
            </Link>

            <Link className="custom-link" to={`/module/${this.props.match.params.idStudent}/${this.props.match.params.idCourse}/${this.props.match.params.idModule}`}>INFORMACIÓN
            </Link>


            <Link className="custom-link" to="/links">ENLANCES
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

            <div className="col-sm-9 sideBar-left right-part">


              <div className="container-module">
                    {this.state.currentModule.map((data) =>
              <div className="row">



              <div className="col-sm-6">
                <h2>{data.nameModule}</h2>
              <p className="poar-border"> {data.moduleDescription}</p>

              </div>

              <div className="col-sm-6">
              <img className="image-module" src={data.contentImage}/>
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

export default Module;
