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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import  Signup  from './Signup.js'





const pStyle = {
  width: '18rem'
};

class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    autoplay: true
  };
}

  render() {
    return (
      <div className="Login">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand anchorlogo" href="#"><img src={logoPe} className="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ESCUELAS Y EMPRESAS</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">CONTACTO</a>
            </li>
          </ul>
        </div>
        <ul class="nav justify-content-end">
<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>
</ul>
      </nav>

      <div className="row">

      <div className="col-sm-7 education">



      </div>

      <div className="col-sm-5">

            <div class="card card-login">

          <div class="card-body">
            <h5 class="card-title">Pecol</h5>
            <p class="card-text">Iniciar sesión</p>
            <form>
            <label> Nombre de usuario
              <input type="text" />
              </label>
              <label> Contraseña
                <input type="password" />
                </label>
                <input type="submit" value="Iniciar sesión"/>
            </form>
            <Link className="nav-link" to="/signup">¿Aún no estás reigstrado?</Link>

          </div>
        </div>
      </div>

      </div>


        </div>
    );
  }
}

export default Login;
