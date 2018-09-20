import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './NavBar.js'
import './Home.css'
import carmen from './fz.jpeg' // relative path to image
import cristi from './imgs/ca.jpeg'
import frida from './imgs/fz.jpeg'
import gabi from './imgs/gb.jpeg'
import ca from './imgs/carmen.jpeg'
import landingBG from './imgs/BG.jpg'
import logoPe from './imgs/pecol-logo.png'
import acuerdo from './imgs/acuerdo.jpg'
import car1 from './imgs/car/1.jpg'
import car2 from './imgs/car/2.jpg'
import car3 from './imgs/car/3.jpeg'
import car4 from './imgs/car/4.jpeg'
import pe1 from './imgs/pe1.jpeg'
import pe2 from './imgs/pe2.jpeg'
import pe3 from './imgs/pe3.jpeg'
import car5 from './imgs/car/5.jpeg'
import car6 from './imgs/car/6.jpeg'
import fb from './imgs/facebook.png'
import mail from './imgs/mail.png'
import inst from './imgs/int.png'
import introVideo from './vids/video.mp4'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import firebase from 'firebase';
import firebaseConfig from './config';
import Signup from './Signup.js'
 import axios from 'axios';

var FaArrowRight = require('react-icons/lib/fa/arrow-right');

var FaGlobe = require('react-icons/lib/fa/globe');

var FaMission = require('react-icons/lib/fa/flag-o');
var FaVision = require('react-icons/lib/fa/eye');
var FaValues = require('react-icons/lib/fa/thumbs-o-up');

var FaMeetings = require('react-icons/lib/fa/user');
var FaSearch = require('react-icons/lib/fa/search');
var FaTaller = require('react-icons/lib/fa/user');

var styleNone = {
  display: 'block' // 'ms' is the only lowercase vendor prefix
};

var {
  SocialIcon
} = require('react-social-icons');



const config = {
  apiKey: "AIzaSyDXu72fg2m3VXrVKlfuoXgx_KvuBjlFV0Y",
  authDomain: "pecol-307dd.firebaseapp.com",
  databaseURL: "https://pecol-307dd.firebaseio.com",
  projectId: "pecol-307dd",
  storageBucket: "pecol-307dd.appspot.com",
  messagingSenderId: "299288601847"
}

firebase.initializeApp(config)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      nameM: "",
      email: "",
      textm: "",
      subject: ""
    };
  }

  sendEmail() {

      console.log("state", this.state)
        axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/sendEmail`, {
          name: this.state.nameM,
          email: this.state.email,
          subject: this.state.subject,
          textm: this.state.textm


         })
             .then(res => {
               console.log("SUCCESS", res);
                alert("Se ha enviado el mensaje correctamente");
               if(res.status == 200) {
                   console.log("ruLE deleted successfully")

               //  browserHistory.replace("/login")
               //  store.set('loggedIn', true);
               //this.props.history.push("/");

               }
             }).catch((error) => {
               //handle error
               alert("Hubo un problema, intente nuevamente");
             });
  }




    handleChange = event => {
      console.log(this.state)
      this.setState({
        [event.target.id]: event.target.value
      });
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
            <div className="col-md-12">
              <h1 className="display-4">Pecol</h1>
              <p className="lead">PERSONA, CONCIENCIA Y LIBERTAD</p>
              <p className="lead slogan2">NUESTRO COMPROMISO ES QUE SEAS LA MEJOR VERSIÓN DE TI...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bannerNews">
        <p className="bannerNewsFont">
          <span className="col-sm-4">
            <FaGlobe/>
            Talleres y pláticas
          </span>
          <span className="col-sm-4">
            <FaGlobe/>
            Hemos formado a mas de mil personas
          </span>
          <span className="col-sm-4">
            <FaGlobe/>
            Consultoría familiar
          </span>
        </p>
      </div>

      <div className="missionVV">
        <div className="row col-md-12">
          <div className="col-md-4">
            <div className="row">
              <p id="missionText" className="missionFont">
                <h1>Misión</h1>
                Impulsar al individuo, que reconozca su valor como ser humano con el fin
                <br/>
                de tomar decisiones asertivas de manera responsable e integra
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <p id="visionText" className="visionFont" style={styleNone}>
                <h1>Visión</h1>
                Transformar al ser humano promoviendo su autoconocimiento y desarrollando
                <br/>
                su liderazgo, mismos que le permitan identificarse como el creador único de
                <br/>
                su crecimiento personal y profesional así como un extraordinario ambiente de trabajo.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
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
        </div>
      </div>

      <div className="methodology">
        <h1>
          ¿Cómo trabajaremos para ti?
        </h1>
        <div className="row col-md-12">
          <div className="col-md-6">
            <div className="row">
              <div className="metTitle">Talleres</div>
            </div>
            <div className="row">
              <div className="metText">
                Nuestros talleres podrán impulsarte a la formación que tanto haz buscado. Fortalécete con nuestras dinámicas
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="metTitle">Conferencias y consultoría</div>
            </div>
            <div className="row">
              <div className="metText">
                Mensualmente realizamos conferencias con más de 300 participantes las cuales son combinadas con talleres y actividades
              </div>
            </div>
          </div>
        </div>
      </div>


{/*
=======
>>>>>>> 1e930b19fd18600fb51e23cef4968205a56e8f5d
      <div className="team">
        <div className="row">
          <h1>
            Nuestro equipo
          </h1>
        </div>
        <div className="row teamComplete">
          <div className="col-lg-3">
            <div className="teammate t1">
              <img src={gabi} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Gabriela Anaya
                </h4>
                <p className="position cli">
                  Licenciatura en Ciencias de la familia.
                </p>

                <p className="dscr cl">
                  <p className="dscr cl">• Consejo en Bifam.</p>
                  <p className="dscr cl">• Prevención en A.C.</p>
                  <p className="dscr cl">• Talleres y cursos de desarrollo humano a empresas.</p>
                  <p className="dscr cl">• Programas de prevención de transnacionales, Ford y Coppel.</p>
                  <p className="dscr cl">• Prevención en de adicciones en la SEP (Edo. Mex) y Conalep II Q. Roo.</p>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teammate t2">
              <img src={frida} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Frida Schulz
                </h4>
                <p className="position cli">
                  Maestra en Derecho, Valores y Medio Ambiente a nivel superior.
                </p>
                <div className="dscr cl">
                  <p className="dscr cl">
                    • Voluntariado en A.C.
                  </p>
                  <p className="dscr cl">
                    • Talleres y cursos de desarrollo humano y Capacitación a empresas.
                  </p>
                  <p className="dscr cl">
                    • Programas de prevención en adicciones, Conalep II; Q. Roo, Mx.</p>
                  <p className="dscr cl">
                    • Consultoría Familiar.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teammate t3">
              <img src={cristi} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Cristina Arenzana
                </h4>
                <p className="position cli">
                  Maestría en Ciencias de la Familia.

                </p>
                <p className="dscr cl">
                  <p className="dscr cl">• Voluntariado en A.C.</p>
                  <p className="dscr cl">• Talleres y cursos de desarrollo humano y Capacitación a empresas.</p>
                  <p className="dscr cl">• Programas de prevención en de adicciones en Conalep II, Q. Roo, Mx</p>
                  <p className="dscr cl">• Consultoría Familiar.</p>

                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="teammate t1">
              <img src={ca} alt="Card image cap"/>
              <div className="teammate-text">
                <h4>Carmen Tomassi
                </h4>
                <p className="position cli">
                  Licenciatura en Neurolinguística y Psicopedagogia

                </p>
                <p className="dscr cl">
                  <p className="dscr cl">• Maestría en ciencias de la familia.</p>
                  <p className="dscr cl">• Diplomado en inteligencia emocional.</p>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
      <div className="carousel">
        <Carousel>
          <div>
            <img src={pe1}/>
          </div>
          <div>
            <img src={pe2}/>
          </div>
          <div>
            <img src={pe3}/>
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
              <input id="nameM"  className="input-form" type="text" name="name" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameM}/>
            </label>
            <label>
              <input id="email"  className="input-form" type="text" name="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email} />
            </label>
          </div>
          <div className="row">
            <label>
              <input id="subject"  className="input-form2" type="text" name="textm" placeholder="Asunto" onChange={this.handleChange} value={this.state.subject}/>
            </label>
          </div>

          <div className="row">
            <label>
              <textarea id="textm"  className="input-form3" type="text" name="name" placeholder="Escribe lo que necesites agregar" onChange={this.handleChange} value={this.state.textm}/>
            </label>


          </div>
            <button onClick={this.sendEmail.bind(this)}> Enviar mensaje </button>
        </div>
      </div>

      <div className="footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-4">
              <a href="https://www.facebook.com/PECOLoriginal/">
                <img className="net" src={fb}/>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="http://picbear.online/pecolmx">
                <img className="net" src={inst}/>
              </a>
            </div>

            <div className="col-sm-4">
              <img className="net" src={mail}/>
              infopecol17@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Home;
