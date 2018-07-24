import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import './Home.css'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/pecol-logo.png'
import acuerdo from './imgs/acuerdo.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Signup from './Signup.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  render() {
    return (
      <div className="Home">
        <div className="top-container">

          <div className="layer"></div>

          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand anchorlogo" href="#"><img src={logoPe} className="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">HOME
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ESCUELAS Y EMPRESAS</a>
                </li>

              </ul>
            </div>
            <ul class="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/login">LOGIN</Link>
              </li>
            </ul>
          </nav>

        </div>

        <div className="custom-headers">
          <h1>
            Pecol
          </h1>
        </div>

        <div className="mision-vision">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>
                  Misión
                </h2>

                <p>
                  Impulsar al individuo, que reconozca su valor como ser humano con el fin de tomar decisiones asertivas de manera responsable e integra.
                </p>
                <h2>
                  Visión
                </h2>
                <p>Transformar al ser humano promoviendo su autoconocimiento y desarrollando su liderazgo, mismos que le permitan identificarse como el creador único de su crecimiento personal y profesional así como un extraordinario ambiente de trabajo.
                </p>
              </div>
              <div className="col">
                <h2>
                  Nuestros principios
                </h2>
                <p>
                  Dignidad de la persona.
                </p>
                <p>
                  Valores universales.
                </p>
                <p>
                  Transcendencia generacional
                </p>

                <h2>
                  ¿Cómo trabajaremos para ti?
                </h2>

                <p>
                  Talleres
                </p>
                <p>
                  Conferencias
                </p>
                <p>
                  Consultoria
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="principios">

          <div className="row">

            <div className="col-sm-6">

              <img src="http://www.scindustrial.com.mx/adm/files_uploaded/imgs/valores.png" className="value"/>

            </div>

            <div className="col-sm-6">
              <h3>
                Nuestros principios
              </h3>
              <p>
                Dignidad de la persona.
              </p>
              <p>
                Valores universales.
              </p>
              <p>
                Transcendencia generacional
              </p>
            </div>

          </div>

          <div className="row">
            <div className="col-sm-6">

              <h3>
                ¿Cómo trabajaremos para ti?
              </h3>

              <p>
                Talleres
              </p>
              <p>
                Conferencias
              </p>
              <p>
                Consultoria
              </p>

            </div>

            <div className="col-sm-5">

              <img src="https://assets.entrepreneur.com/content/3x2/1300/conferencias_internacionales.jpg?width=700&crop=2:1" className="conf"/>

            </div>
          </div>

        </div>

        <div className="team">
          <h3>
            Nuestro equipo
          </h3>

          <div className="row">
            <div className="col-sm-3">
              <img className="person-image" src={carmen} alt="Card image cap"/>

              <p className="nameperson">
                Carmen Tommasi
              </p>

            </div>

            <div className="col-sm-3">
              <img className="person-image" src={cristi} alt="Card image cap"/>
              <p className="nameperson">
                Cristina Arenzana
              </p>
            </div>

            <div className="col-sm-3">
              <img className="person-image" src={frida} alt="Card image cap"/>
              <p className="nameperson">
                Frida Schulz
              </p>
            </div>

            <div className="col-sm-3">
              <img className="person-image" src={gabi} alt="Card image cap"/>
              <p className="nameperson">
                Gabriela Anaya
              </p>
            </div>

          </div>

        </div>

        <div className="contact">
          <h2>
            ¿Tienes alguna pregunta?
          </h2>
          <div className="container">
            <form action="action_page.php" className="form-contact">

              <label for="fname">Nombre completo</label>
              <input type="text" id="fname" name="firstname" placeholder="Nombre"/>
              <label for="fname">Correo electrónico</label>
              <input type="text" id="fname" name="firstname" placeholder="Email"/>
              <label for="subject">Asunto</label>
              <textarea id="subject" name="subject" placeholder="Escribe tu mensaje"></textarea>

              <input type="submit" value="Enviar" className="submit-button"/>

            </form>
          </div>
        </div>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default Home;
