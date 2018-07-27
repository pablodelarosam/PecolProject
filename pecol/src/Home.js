import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './NavBar.js'
import './Home.css'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import landingBG from './imgs/BG.jpg'
import logoPe from './imgs/pecol-logo.png'
import acuerdo from './imgs/acuerdo.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Signup from './Signup.js'

var FaArrowRight = require('react-icons/lib/fa/arrow-right');

var FaGlobe = require('react-icons/lib/fa/globe');

var FaMission = require('react-icons/lib/fa/flag-o');
var FaVision = require('react-icons/lib/fa/eye');
var FaValues = require('react-icons/lib/fa/thumbs-o-up');

var FaMeetings = require('react-icons/lib/fa/eye');

var styleNone = {
  display: 'none' // 'ms' is the only lowercase vendor prefix
};

var { SocialIcon } = require('react-social-icons');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  activateText(id) {
    switch(id){
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
    return (
      <div className="Home">
        <div>
          <NavBar/>
        </div>
        <div className="landingDiv">
          <div className="jumbotron">
            <h1 className="display-4">Pecol</h1>
            <p className="lead">Algun buen slogan ponerlo aqui, pero tiene que ser muy bueno</p>
            <p>Esta parte de abajo deberá ser un poco más corta, pero solo un poco.</p>
            <br/>
            <p className="lead">
              <Link className="btn btn-success-landing btn-lg" to="#" role="button">Únete</Link>
              <Link className="watchCourses" to="/login" style={{ textDecoration: 'none' }}>Ver los cursos <FaArrowRight /></Link>
            </p>
          </div>
        </div>

        <div className="bannerNews">
          <p className="bannerNewsFont">
            <span className="">
              <FaGlobe /> Contamos con más de 500 cursos
            </span>
            <span className="col-md-6">
              <FaGlobe /> Contamos con más de 500 cursos
            </span>
            <span className="col-md-6">
              <FaGlobe /> Contamos con más de 500 cursos
            </span>
          </p>
        </div>

        <div className="missionVV">
          <div className="iconContainer">
              <button onClick={(e) => this.activateText(1, e)} className="btn missionDiv">
                <FaMission />
              </button>
              <button onClick={(e) => this.activateText(2, e)} className="btn visionDiv">
                <FaVision />
              </button>
              <button onClick={(e) => this.activateText(3, e)} className="btn valuesDiv">
                <FaValues />
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
            <h1> ¿Cómo trabajaremos para ti? </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 icons"><FaMeetings /></div>
            <div className="col-lg-4 icons"><FaMeetings /></div>
            <div className="col-lg-4 icons"><FaMeetings /></div>
          </div>
          <div className="row">
            <div className="col-lg-4 metTitle">Talleres</div>
            <div className="col-lg-4 metTitle">Conferencias</div>
            <div className="col-lg-4 metTitle">Consultoría</div>
          </div>
          <div className="row">
            <div className="col-lg-4 metText">Hola Hola v Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola v Hola Hola Hola Hola Hola Hola Hola Hola</div>
            <div className="col-lg-4 metText">Hola Hola v Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola v Hola Hola Hola Hola Hola Hola Hola Hola</div>
            <div className="col-lg-4 metText">Hola Hola v Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola v Hola Hola Hola Hola Hola Hola Hola Hola</div>
          </div>
        </div>

        <div className="team">
          <div className="row">
            <h1> Nuestro equipo </h1>
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
                  <SocialIcon className="socialMediaIcon" network="facebook" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="twitter" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="linkedin" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
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
                  <SocialIcon className="socialMediaIcon" network="facebook" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="twitter" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="linkedin" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
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
                  <SocialIcon className="socialMediaIcon" network="facebook" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="twitter" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="linkedin" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="teammate t4">
                <img src={gabi} alt="Card image cap"/>
                <div className="teammate-text">
                  <h4>Carmen Tommasi</h4>
                  <p className="position">
                    General manager
                  </p>
                  <p className="dscr">
                    General manager asdkasdlkasd adsf asdf a df
                  </p>
                  <SocialIcon className="socialMediaIcon" network="facebook" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="twitter" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                  <SocialIcon className="socialMediaIcon" network="linkedin" url="http://linkedin.com/in/jaketrent" style={{ height: 25, width: 25 }} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="contact">
          <div className="cForm">
            <div className="row">
              <h2> ¿Tienes alguna pregunta? </h2>
            </div>
            <div className="row">
              <label>
                <input className="input-form" type="text" name="name" placeholder="Nombre" />
              </label>
              <label>
                <input className="input-form" type="text" name="name" placeholder="E-mail"/>
              </label>
            </div>
            <div className="row">
              <label>
                <input className="input-form2" type="text" name="name" placeholder="Asunto" />
              </label>
            </div>

            <div className="row">
              <label>
                <textarea className="input-form3" type="text" name="name" placeholder="Escribe lo que necesites agregar" />
              </label>
            </div>
          </div>
        </div>

        <div className="footer">
        </div>

                  {/*
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
        */}
      </div>
    );
  }
}

export default Home;
