import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './Teacher.css';
import NavBarDash from './NavBarDash.js';
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

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
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
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/teacher`).then(res => {
      const teacher = res.data;
      for (var i = 0; i < teacher.length; i++) {

        images.push(teacher[i].contentImage)
      }
      for (var i = 0; i < images.length; i++) {
        const fileReaderInstance = new FileReader();
        //   var file = fileReaderInstance.readAsDataURL(images[i]);
        // console.log("IMAGE 64", file)
        //     convertedImages.push(this.convertBase64(images[i]))
      }
      console.log("teacherss", teacher)
      this.setState({teacher: teacher});
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

    return (<div className="dashboard-top">
      <div>
        <NavBarDash idStudent={this.props.match.params.id}/>
      </div>
      <div className="row">
        <div className="mainContent">
          <div className="teachers">
            <div className="col-sm-12">
              <h2>Profesores</h2>
              <div className="container">
                <div className="row">
                  {
                    this.state.teacher.map((data) => <div className="row">
                      <div className="col-lg-3">
                        <img className="card-img-top" src={data.contentImage}/>
                      </div>
                      <div className="col-lg-9">
                        <div className="row">
                          <h1>{data.nameTeacher}</h1>
                        </div>
                        <div className="row">
                          <h4>{data.nombreMateria}</h4>
                        </div>
                        <div className="row">
                          <h4>{data.descriptionSubject}</h4>
                        </div>
                      </div>
                    </div>)
                  }
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Teacher;
