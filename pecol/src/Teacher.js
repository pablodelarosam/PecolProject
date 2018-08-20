import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './Teacher.css'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import gabriela from './imgs/gaby.jpeg'
import teacher from './imgs/teacher.jpg'
import secondteacher from './imgs/teacher-two.jpg'
import axios from 'axios';
import ImageLoader from 'react-image-file';

import Signup from './Signup.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
var images = [];
var convertedImages = []
class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: []
    };



  }

  componentDidMount() {
    axios.get(`http://localhost:3004/teacher`)
     .then(res => {
       const teacher = res.data;
       for(var i = 0; i < teacher.length; i++) {

         images.push(teacher[i].contentImage)
       }
       for(var i = 0; i < images.length; i++) {
         const fileReaderInstance = new FileReader();
      //   var file = fileReaderInstance.readAsDataURL(images[i]);
        // console.log("IMAGE 64", file)
    //     convertedImages.push(this.convertBase64(images[i]))
       }
       console.log("teachers", teacher)
       this.setState({teacher: teacher });
        console.log("IMAGES", images)
     })
  }

  convertBase64 = blob => {
    var base64data
    const fileReaderInstance = new FileReader();
    fileReaderInstance.readAsDataURL(blob);

    console.log(base64data);
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
              <h2>Profesores</h2>
              <div className="container">
              <div className="row">
                  {this.state.teacher.map((data) =>
              <div className="col-sm-6">
              <div className="card card-custom" style={{ width: '18rem' }} key={data.idteacher}>
              <img className="imgteacher" src= {data.contentImage} />

                <div className="card-body">
                  <h5 className="card-title">{data.nameTeacher}</h5>
                  <p className="card-text">{data.nombreMateria}</p>
                  <p className="card-text">{data.descriptionSubject}</p>

                </div>
              </div>
              </div>
                  )}
              </div>

                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Teacher;
