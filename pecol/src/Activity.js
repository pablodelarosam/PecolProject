import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Activity.css';
import NavBar from './NavBar.js'
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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity:[]
    };
  }


  componentDidMount() {
    const idC = this.props.match.params.idModule
     console.log("PROPS ACTIVITIES", this.props.match.params.id, idC, this.props)
  axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/activities/${idC}`)
   .then(res => {
     const activities = res.data;

      this.setState({activity: activities });
        console.log("activity", this.state.activity[0])
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


            <div className="col-sm-9 sideBar-left">
              <h2>Actividades</h2>
              <div className="container">
                <div className="row activities">

                  {this.state.activity.map((data) =>



                                        <div className="" >
                                          <div className="">
                                            <h5 className="card-title">{data.nameActivity}</h5>

                                      <Link className=" module-button btn btn-primary" to={`/activityDetails/${this.props.match.params.idStudent}/${data.typeActivity}/${data.idActivity}/${data.idModule}`}>Ir a la actividad</Link>
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

export default Activity;
