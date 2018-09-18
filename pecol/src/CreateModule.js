import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './CreateModule.css';
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
class CreateModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameEnlace: "",
      urlEnlace: ""
    }
  }


  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('nameEnlace', this.state.nameEnlace)
  formData.append('urlEnlace', this.state.urlEnlace)



  // axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

  axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createLink`, formData, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    }
  })
    .then((response) => {
      //handle success
      console.log("success upload")
      alert("Se ha creado el enlace correctamente")
    }).catch((error) => {
      //handle error
      alert("Se ha presentado un error, intente más tarde")
    });
  };

  render() {
    return (
      <div className="dashboard-top">
      <div>
        <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/home">Pecol</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="custom-link" to="/createStudent">Agregar estudiante
          </Link>

          <Link className="custom-link" to="/createCourse">Agregar curso
          </Link>

          <Link className="custom-link" to="/createAdvertisement">Agregar aviso
          </Link>

          <Link className="custom-link" to="/createTeacher">Agregar profesor
          </Link>

          <Link className="custom-link" to="/createRule">Agregar regla
          </Link>

          <Link className="custom-link" to="/createRule">Correo
          </Link>

          <Link className="custom-link" to="/createModule">Módulo
          </Link>

          <Link className="custom-link" to="/stadistics">Estadísticas
          </Link>

        </nav>
      </div>
    <div className="upload-file">


          <div className="dashboard_content">

              <h2>Módulo</h2>
              <div className="container">
              <h3> Enlaces </h3>

              <form onSubmit={this.handleSubmit}>
              <TextField id="nameEnlace" placeholder="nombre" onChange={this.handleChange} value={this.state.nameEnlace} />
              <TextField id="urlEnlace" placeholder="url" onChange={this.handleChange} value={this.state.urlEnlace}/>
              <button type="submit" className="link-button"> Crear enlace </button>

              </form>

              <Link to="/createActivity" className="act"> Actividades </Link>

              </div>

          </div>


        </div>
      </div>

    );
  }
}

export default CreateModule;
