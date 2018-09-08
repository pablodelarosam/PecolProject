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
class  Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModule:[]
    };
  }


  componentDidMount() {
    const idStudent = this.props
    console.log("props", this.idStudent)
    const idC = this.props.idModule
     console.log("PROPS Module", this.props.idCourse, idC, this.props)
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
          <Link className="navbar-brand" to="/home">Pecol</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="custom-link" to={`/activity/${this.props.idStudent}/${this.props.idModule}/${this.props.idCourse}`}>ACTIVIDADES
            </Link>

            <Link className="custom-link" to={`/module/${this.props.idStudent}/${this.props.idModule}/${this.props.idCourse}`}>INFORMACIÓN
            </Link>


            <Link className="custom-link" to={`/links/${this.props.idStudent}/${this.props.idModule}/${this.props.idCourse}`}>ENLANCES
            </Link>

            <Link className="custom-link" to="/home">CORREO
            </Link>


          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
          </div>

          <div className="dashboard_content">

            <div className="col-sm-9 sideBar-left right-part">


              <div className="container-module">
                    {this.state.currentModule.map((data) =>
              <div className="row">



              <div className="col-sm-12">
                <h2>{data.nameModule}</h2>
              <p className="poar-border desmo"> {data.moduleDescription}</p>

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

export default Information;
