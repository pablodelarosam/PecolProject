import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Login.css';
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Signup from './Signup.js'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const pStyle = {
  width: '18rem'
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  render() {
    return (<div className="Login mainDiv">

      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <div className="form-inline my-2 my-lg-0">
              <Link className="nav-link" to="/login">Escuelas y empresas</Link>
              <Link className="nav-link btn btn-success" to="/signup">Registro</Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="row LoginCont">
        <div className="container">
          <h1>Ingrese su cuenta de usuario </h1>
          <form>
            <TextField id="username" label="Usuario" placeholder="Usuario" className="textField" margin="normal"/>
            <br/>
            <TextField id="password" label="Contraseña" type="password" placeholder="Contraseña" className="textField" margin="normal"/>
            <br/>
            <br/>
              {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
              <Link className="nav-link btn btn-success" to="/dashboard">Iniciar sesión</Link>
          </form>
        </div>

      </div>

    </div>);
  }
}

export default Login;
