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
class CreateStudent extends Component {
  constructor(props) {
      super(props);
    this.state = {
      autoplay: true,
      id: "",
      nameStudent: "",
      age: "",
      email: "",
      password: "",
      idDelete: "",
      idModify: "",
      nameModify: "",
      ageModify: "",
      emailModify: "",
      passwordModify: ""
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


axios.post(`http://localhost:3004/signupStudent`, {
   id: this.state.id,
   nameStudent: this.state.nameStudent ,
   age: this.state.age,
   email: this.state.email ,
   password: this.state.password

 })
     .then(res => {
       console.log("SUCCESS", res);
       if(res.status == 200) {

         this.setState({ isLoggedIn: !(this.state.isLoggedIn)});
           console.log('Successfully Login', this.state);
       //  browserHistory.replace("/login")
       //  store.set('loggedIn', true);
       //this.props.history.push("/");

       }
     })
 }

 deleteStudent = event => {
   event.preventDefault();

   axios.post(`http://localhost:3004/deleteStudent`, {
      idDelete: this.state.idDelete,


    })
        .then(res => {
          console.log("SUCCESS", res);
          if(res.status == 200) {
              console.log("Student deleted successfully")
          //  browserHistory.replace("/login")
          //  store.set('loggedIn', true);
          //this.props.history.push("/");

          }
        })
 }

 modifyStudent = event => {
   event.preventDefault();

   axios.put(`http://localhost:3004/modifyStudent`, {
     idModify: this.state.idModify,
     nameModify: this.state.nameModify ,
     ageModify: this.state.ageModify,
     emailModify: this.state.emailModify ,
     passwordModify: this.state.passwordModify


    })
        .then(res => {
          console.log("SUCCESS", res);
          if(res.status == 200) {
              console.log("Student modified successfully")
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

        <Link className="custom-link" to="/createRule">Correo
        </Link>

        <Link className="custom-link" to="/createRule">Módulo
        </Link>

        <Link className="custom-link" to="/stadistics">Estadísticas
        </Link>

      </nav>
      </div>

        <div className="upload-file">

        <div className="row">
          <div className="col-sm-6">
          <h4> Borrar estudiante </h4>
            <form onSubmit={this.deleteStudent} className="formCourse">
            <TextField id="idDelete" label="Id" placeholder="Id" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idDelete}  />
            <br />
            <button className="nav-link btn btn-success" type="submit">Borrar estudiante</button>

            </form>

            <h4> Modificar estudiante </h4>
            <form onSubmit={this.modifyStudent} className="formCourse">
              <TextField id="idModify" label="Id" placeholder="Estudiante a modificar" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModify}  />
              <br />
              <TextField id="nameModify" label="Nombre" placeholder="Nombre" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModify} />
              <br />
              <TextField id="ageModify" label="Edad" placeholder="Edad" className="textField" margin="normal" onChange={this.handleChange} value={this.state.ageModify} />
              <br />
              <TextField id="emailModify" label="E-mail" placeholder="E-mail" className="textField" margin="normal" onChange={this.handleChange} value={this.state.emailModify} />
              <br />
              <TextField id="passwordModify" label="Contraseña" type="password" placeholder="Contraseña" className="textField" margin="normal" onChange={this.handleChange} value={this.state.passwordModify} />
              <br />
              <br />
              {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
              <button className="nav-link btn btn-success" type="submit">Modificar</button>
            </form>
          </div>

          <div className="col-sm-4">
          <h4> Crear estudiante </h4>
          <form onSubmit={this.handleSubmit} className="formCourse">
            <TextField id="id" label="Id" placeholder="Id" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudent}  />
            <br />
            <TextField id="nameStudent" label="Nombre" placeholder="Nombre" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameStudent} />
            <br />
            <TextField id="age" label="Edad" placeholder="Edad" className="textField" margin="normal" onChange={this.handleChange} value={this.state.age} />
            <br />
            <TextField id="email" label="E-mail" placeholder="E-mail" className="textField" margin="normal" onChange={this.handleChange} value={this.state.email} />
            <br />
            <TextField id="password" label="Contraseña" type="password" placeholder="Contraseña" className="textField" margin="normal" onChange={this.handleChange} value={this.state.password} />
            <br />
            <br />
            {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
            <button className="nav-link btn btn-success" type="submit">Registrar</button>
          </form>
          </div>
        </div>





        </div>



      </div>

    );
  }
}

export default CreateStudent;
