import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './CourseDetails.css';
import human from './imgs/human.jpg'
import carmen from './carmen.jpeg' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import axios from 'axios';


import  Signup  from './Signup.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class CourseDetails extends Component {
  constructor(props) {
  super(props);
  this.state = {
    module:[]

  };

}



componentDidMount() {
 const idC = this.props.match.params.idCourse
 const idStu = this.props.match.params.idStudent
  console.log("PROPS COURSE DETAILS", this.props.match.params.idCourse, idC)
axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/courseModules/${idC}`)
 .then(res => {
   const modules = res.data;

   this.setState({module: modules });
     console.log("MODULE", this.state.module[0])
 })
}

gotoCourseDetails() {
console.log("clicked")
}



  render() {


return (
  <div className="dashboard-top">
  <div>
    <div className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
    <Link className="navbar-brand" to="/home">Pecol</Link>





    </div>
  </div>
  <div className="row">
    <div className="col-sm-3 sideBar-left">
        <SideBar idStudent={this.props.match.params.idStudent} />
    </div>

    <div className="col-sm-9">



    <div className="dashboard_content">
      <div className="col-sm-12 sideBar-left">
        <h2>Módulos</h2>
        <div className="container">
          <div className="row">
          {this.state.module.map((data) =>

            <div className="col-sm-6" key={data.idModule} onClick={this.gotoCourseDetails}>
              <div className="card" style={{
                width: '18rem'
              }}>

              <h5 class="card-header">{data.nameModule}</h5>
              <div class="card-body">
              <img className="module-img" src={data.contentImage}/>
              <Link className="module-button btn btn-primary" to={`/activity/${this.props.match.params.idStudent}/${data.idModule}/${data.idCourse}`} style={{
                width: '18rem'
              }}>Ir al módulo</Link>
              </div>

              </div>
            </div>

          )}
          </div>
        </div>
      </div>
    </div>



    </div>
  </div>


  </div>

);
  }
}


export default CourseDetails;
