import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './ListCourses.css';
import axios from 'axios';
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import human from './imgs/human.jpg'



import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class ListCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course:[]
    };
  }






  componentDidMount() {
 axios.get(`http://localhost:3004/ListCourses`)
   .then(res => {
     const courses = res.data;

     this.setState({course: courses });
       console.log("course", this.state.course[0].idCOURSE)
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
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
            <SideBar />
          </div>

          <div className="dashboard_content">
            <div className="col-sm-12 sideBar-left">
              <h2>Cursos</h2>
              <div className="container">
                <div className="row">
                {this.state.course.map((data) =>
                  <Link className="custom-link-course" to="/courseDetails">
                  <div className="col-sm-6" key={data.idCOURSE} onClick={this.gotoCourseDetails}>
                    <div className="card" style={{
                      width: '18rem'
                    }}>
                      <img className="card-img-top" src={human} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{data.nameCourse}</h5>
                        <p className="card-text">{data.introCourse}</p>
                        <a href="#" class="btn btn-primary">Ir al curso</a>
                      </div>
                    </div>
                  </div>
                  </Link>
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

export default ListCourses;
