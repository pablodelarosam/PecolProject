import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './CreateRule.css'
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class CreateLink extends Component {
  constructor(props) {
      super(props);
    this.state = {
      nombreEnlace: "",
      urlEnlace: ""
    };
  }


  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  componentDidMount() {
    console.log("State", this.state)
  }

  handleSubmit = event => {
  event.preventDefault();


axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createLink`, {
  nombreEnlace: this.state.nombreEnlace,
  urlEnlace: this.state.urlEnlace,


 })
     .then(res => {
       console.log("SUCCESS", res);
       if(res.status == 200) {


       //  browserHistory.replace("/login")
       //  store.set('loggedIn', true);
       //this.props.history.push("/");

       }
     })
 }

  render() {
    return (
      <div className="dashboard-top">
      <div>
      <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">Pecol</a>
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

        <Link className="custom-link" to="/messagesPersonnel">Correo
        </Link>

        <Link className="custom-link" to="/createModule">Módulo
        </Link>

        <Link className="custom-link" to="/stadistics">Estadísticas
        </Link>

      </nav>
      </div>

        <div className="upload-file">


        <form onSubmit={this.handleSubmit} className="formCourse">
          <TextField id="nombreEnlace" label="Id" placeholder="Nombre de enlace" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nombreEnlace}  />
          <br />
          <TextField id="urlEnlace" label="Nombre" placeholder="Url de enlace" className="textField" margin="normal" onChange={this.handleChange} value={this.state.urlEnlace} />
          <br />


          <br />
          {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
          <button className="nav-link btn btn-success" type="submit">Crear enlace</button>
        </form>


        </div>



      </div>

    );
  }
}

export default CreateLink;
