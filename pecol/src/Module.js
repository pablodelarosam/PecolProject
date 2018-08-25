import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Module.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import camionero from './imgs/camionero.jpeg'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class  Module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModule:[]
    };
  }


  componentDidMount() {
    const idStudent = this.props.match.params.idStudent
    const idC = this.props.match.params.idCourse
     console.log("PROPS", this.props.match.params.idCourse, idC)
  axios.get(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/currentModule/${idC}`)
   .then(res => {
     const modules = res.data;

     this.setState({currentModule: modules });
   })
  }

  gotoCourseDetails() {
  console.log("clicked")
  }

  render() {
    return (
      <div className="dashboard-top">
        <div>
          <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="custom-link" to="/activity">ACTIVIDADES
            </Link>

            <Link className="custom-link" to="/definition">DEFINICIONES
            </Link>

            <Link className="custom-link" to="/links">ENLANCES
            </Link>

            <Link className="custom-link" to="/home">CORREO
            </Link>

          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
          <SideBar idStudent={this.props.match.params.idStudent} />
          </div>

          <div className="dashboard_content">

            <div className="col-sm-9 sideBar-left right-part">


              <div className="container-module">
              <div className="row">
              <div className="col-sm-6">
                <h2>El valor de la persona</h2>
              <p className="poar-border"> Todas las personas son valiosas por el simple hecho de existir, grandiosas por su manera de ser, de comportarse y de actuar.
La diferencia que existe entre los animales y las personas, es que tienes por naturaleza inteligencia, conciencia, libertad y voluntad, esto es lo que te hace responsable de tus actos.
La inteligencia te hace conocer los hechos y las situaciones, observar y analizar. Por ejemplo tengo un pasajero de la tercera edad, que requiere atención especial.
La palabra conciencia significa con conocimiento, por lo tanto es la qe te hace distinguir lo que está bien y lo que está mal. Por lo tanto retomando el ejemplo anterior y utilizando la conciencia pensaré si es bueno o malo ayudar al pasajero.
La libertad es la que te va hacer elegir entre lo correcto y lo incorrecto, es el privilegio de hacer lo que me hace pleno como persona, por consiguiente elijo ayudar al pasajero.
La voluntad es la acción que tomo ante un acontecimiento, es el querer hacerlo. Entonces ayudo al pasajero a abordar el autobus.
Amarte, es querer tu bien, es aquello que te hace ser mejor persona, es decir, al haber ayudado al pasajero, me siento servicial y esto me hace sentir bien.
El enemigo del amor es el miedo, ya que el  miedo te achica, paraliza y te hace quedarte en tu zona cómoda, callando y tapando aquello que no te gusta. Así que en lugar de ayudar me quedo parado y no tomo acción con el pasajero.
Si tienes miedo vives desde la indiferencia, eres inconsistente, no te importa lo que les pasa a los otros y solo ves tú conveniencia.
Es importante el autoconocimiento es decir, interiorizar para que conozcas lo mejor de ti y así fortalezcas tus cualidades y puedas vencer tus miedos, renuncia a lo que no te hace bien y crea la mejor versión de ti mismo. Eres apreciado por tu comportamiento, no por tus títulos, ni por tus habilidades, y menos por tu curriculum. No es lo que haces, es como haces lo que haces y a través de lo que haces, eres una mejor persona. Ser conductor no te hace una buena persona, lo que te hace ser una buena persona son tus acciones para con los demás y para contigo mismo.
Tus conocimientos son muy importantes, tus habilidades también, pero lo mejor que tienes es tu actitud, los demás te aprecian por eso, te quieren por lo que compartes con ellos.
Aquellas personas fantásticas, tienen una manera de ser fantástica, es una elección de vida, con tu comportamiento vas a  contagiar y no necesitarás convencer, simplemente con tu ejemplo pondrás la pauta.
Transmite buenas sensaciones, se apasionado y consistente en lo que haces y serás como una lámpara encendida que vas a irradiar fuerza, luz y energía.
Trabaja tu actitud, convencido de que esto es lo mejor que tienes para ti y para los demás.
Todos somos personas, todos somos valiosos, pero no todos nos manejamos con excelencia.
Tus conocimientos y habilidades suman en tu vida, pero tu actitud multiplica. Ofrece lo mejor de ti a los demás y la excelencia estará en ti, no es cuestión de edad, sino de actitud, porque no acabas hasta el día que te mueres; no busques dar más, busca dar lo mejor.
Valor de la persona es igual a la suma de tus conocimientos, más la suma de tus habilidades pero lo que multiplica es tu actitud. (Victor Küppers).
 </p>

              </div>

              <div className="col-sm-6">
              <img className="image-module" src={camionero}/>
              </div>
              </div>

              </div>
                    </div>


      </div>
      </div>
      </div>


    );
  }
}

export default Module;
