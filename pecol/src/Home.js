import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './NavBar.js'
import './Home.css'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.jpeg'
import landingBG from './imgs/BG.jpg'
import logoPe from './imgs/pecol-logo.png'
import acuerdo from './imgs/acuerdo.jpg'
import car1 from './imgs/car/1.jpg'
import car2 from './imgs/car/2.jpg'
import car3 from './imgs/car/3.jpeg'
import car4 from './imgs/car/4.jpeg'
import car5 from './imgs/car/5.jpeg'
import car6 from './imgs/car/6.jpeg'
import introVideo from './vids/video.mp4'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Signup from './Signup.js'

var FaArrowRight = require('react-icons/lib/fa/arrow-right');

var FaGlobe = require('react-icons/lib/fa/globe');

var FaMission = require('react-icons/lib/fa/flag-o');
var FaVision = require('react-icons/lib/fa/eye');
var FaValues = require('react-icons/lib/fa/thumbs-o-up');

var FaMeetings = require('react-icons/lib/fa/user');
var FaSearch = require('react-icons/lib/fa/search');
var FaTaller = require('react-icons/lib/fa/user');

var styleNone = {
  display: 'none' // 'ms' is the only lowercase vendor prefix
};

var {
  SocialIcon
} = require('react-social-icons');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  activateText(id) {
    switch (id) {
      case 1:
        document.getElementById("missionText").style.display = "block";
        document.getElementById("visionText").style.display = "none";
        document.getElementById("valuesText").style.display = "none";
        break;
      case 2:
        document.getElementById("missionText").style.display = "none";
        document.getElementById("visionText").style.display = "block";
        document.getElementById("valuesText").style.display = "none";
        break;
      case 3:
        document.getElementById("missionText").style.display = "none";
        document.getElementById("visionText").style.display = "none";
        document.getElementById("valuesText").style.display = "block";
        break;
    }
  }

  render() {
    return (<div className="Home">
      <div>
        <NavBar/>
      </div>
      <div className="landingDiv">
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4">Pecol</h1>
              <p className="lead">Slogan de la empresa</p>
              <p></p>
              <br/>
              <p className="lead">
                <Link className="btn btn-success-landing btn-lg" to="/signup" role="button">Únete</Link>
                <Link className="watchCourses" to="/login" style={{
                    textDecoration: 'none'
                  }}> Ver los cursos <FaArrowRight/> </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bannerNews">
        <p className="bannerNewsFont">
          <span className="">
            <FaGlobe/>
            Contamos con más de 500 cursos
          </span>
          <span className="col-md-6">
            <FaGlobe/>
            Contamos con más de 500 cursos
          </span>
          <span className="col-md-6">
            <FaGlobe/>
            Contamos con más de 500 cursos
          </span>
        </p>
      </div>

      <div className="missionVV">
        <div className="iconContainer">
          <button onClick={(e) => this.activateText(1, e)} className="btn missionDiv">
            <FaMission/>
          </button>
          <button onClick={(e) => this.activateText(2, e)} className="btn visionDiv">
            <FaVision/>
          </button>
          <button onClick={(e) => this.activateText(3, e)} className="btn valuesDiv">
            <FaValues/>
          </button>
        </div>
        <div className="container fontContainer">
          <p id="missionText" className="missionFont">
            <h1>Misión</h1>
            Impulsar al individuo, que reconozca su valor como ser humano con el fin
            <br/>
            de tomar decisiones asertivas de manera responsable e integra
          </p>
          <p id="visionText" className="visionFont" style={styleNone}>
            <h1>Visión</h1>
            Transformar al ser humano promoviendo su autoconocimiento y desarrollando
            <br/>
            su liderazgo, mismos que le permitan identificarse como el creador único de
            <br/>
            su crecimiento personal y profesional así como un extraordinario ambiente de trabajo.
          </p>
          <p id="valuesText" className="valuesFont" style={styleNone}>
            <h1>Valores</h1>
            Dignidad de la persona.
            <br/>
            Valores universales.
            <br/>
            Transcendencia generacional
          </p>
        </div>
      </div>

      <div className="methodology">
        <div className="row">
          <h1>
            ¿Cómo trabajaremos para ti?
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-4 icons"><FaMeetings/></div>
          <div className="col-lg-4 icons"><FaTaller/></div>
          <div className="col-lg-4 icons"><FaSearch/></div>
        </div>
        <div className="row">
          <div className="col-lg-4 metTitle">Talleres</div>
          <div className="col-lg-4 metTitle">Conferencias</div>
          <div className="col-lg-4 metTitle">Consultoría</div>
        </div>
        <div className="row">
          <div className="col-lg-4 metText">
            Nuestros talleres podrán impulsarte a la formación que tanto haz buscado. Fortalécete con nustras dinámicas
          </div>
          <div className="col-lg-4 metText">
            Mensualmente realizamos conferencias con más de 300 participantes las cuales son
            combinadas con talleres y actividades
           </div>
          <div className="col-lg-4 metText">
            Mensualmente realizamos conferencias con más de 300 participantes las cuales son
            combinadas con talleres y actividades
          </div>
        </div>
      </div>

      <div className="team">
        <div className="row">
          <h1>
            Nuestro equipo
          </h1>
        </div>
        <div className="row teamComplete">
          <div className="col-lg-3">
            <div className="teammate t1">
              <img src={carmen} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Carmen Tommasi</h4>
                <p className="position">
                  General manager
                </p>
                <p className="dscr">
                  General manager asdkasdlkasd adsf asdf a df
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teammate t2">
              <img src={cristi} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Carmen Tommasi</h4>
                <p className="position">
                  General manager
                </p>
                <p className="dscr">
                  General manager asdkasdlkasd adsf asdf a df
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teammate t3">
              <img src={frida} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Carmen Tommasi</h4>
                <p className="position">
                  General manager
                </p>
                <p className="dscr">
                  General manager asdkasdlkasd adsf asdf a df
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teammate t4">
              <img src={gabi} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Carmen Tommasi</h4>
                <p className="position">
                  Licenciada en ciencias de la familia, diplomados en bioetica, familias disfuncionales
                </p>
                <p className="dscr">
                  Experiencia laboral por más de 18 años
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel">
        <Carousel>
          <div>
            <img src={car4}/>
            <p className="legend">Talleres</p>
          </div>
          <div>
            <img src={car5}/>
            <p className="legend">Conferencias</p>
          </div>
          <div>
            <img src={car6}/>
            <p className="legend">Auditorías</p>
          </div>
        </Carousel>
      </div>

      <div className="contact">
        <div className="cForm">
          <div className="row">
            <h2>
              ¿Tienes alguna pregunta?
            </h2>
          </div>
          <div className="row">
            <label>
              <input className="input-form" type="text" name="name" placeholder="Nombre"/>
            </label>
            <label>
              <input className="input-form" type="text" name="name" placeholder="E-mail"/>
            </label>
          </div>
          <div className="row">
            <label>
              <input className="input-form2" type="text" name="name" placeholder="Asunto"/>
            </label>
          </div>

          <div className="row">
            <label>
              <textarea className="input-form3" type="text" name="name" placeholder="Escribe lo que necesites agregar"/>
            </label>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container text-center">

        </div>
      </div>
    </div>);
  }
}

export default Home;
