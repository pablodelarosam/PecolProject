import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Signup.css';
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Redirect } from 'react-router';

const pStyle = {
  width: '18rem'
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      idStudent: "",
      nameStudent: "",
      age: "",
      email: "",
      passoword: ""
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
   id: this.state.idStudent,
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

  render() {
    return (<div className="Signup mainDiv">

      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="/home">Pecol</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <div className="form-inline my-2 my-lg-0">
              <Link className="nav-link" to="/login">Escuelas y empresas</Link>
              <Link className="nav-link btn btn-success" to="/login">Login</Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="row SignupCont">
        <div className="container">
          <h1>Ingrese los datos del usuario </h1>
          <form onSubmit={this.handleSubmit}>
            <TextField id="idStudent" label="Id" placeholder="Id" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudent}  />
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

    </div>);
  }
}

export default Signup;
