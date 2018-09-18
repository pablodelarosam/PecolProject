import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './stadistics.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class Stadistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    }
  }

  componentDidMount(){

    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/getAllGrades`)
     .then(res => {
       const rule = res.data;
       console.log("links", rule)
       this.setState({grades: rule });
        console.log("links", this.state.linkPecol)
     })

  }

  downloadStadistics = () => {

    const rows = [
      [
        "Calificacion", " ",  "Nombre de actividad", " ",  "Id de estudiante", " ",  "Tipo de actividad"
      ]
    ];
    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });

    this.state.grades.forEach(function(rowArray) {
      console.log("rowarray", rowArray)
      var result = Object.keys(rowArray).map(function(key) {
  return [Number(key), rowArray[key]];
});

      let row = result.join(",");
      csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  render() {
    return (
      <div className="dashboard-top">
        <div>
          <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/home">Pecol</Link>
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

        <div className="container stadistics">
          <h2>Estadísticas</h2>
          <div className="upload-file">


          <button onClick={this.downloadStadistics}>
            Descargar estadísticas
          </button>

          <div className="links">

          <Link to="/allstudent"> Ver todos los alumnos </Link>
            <Link to="/allteacher">  Ver todos los maestros</Link>
            <Link to="/allCourses">  Ver todos los cursos</Link>
              <Link to="/allmodules"> Ver todos los modulos </Link>
                <Link to="/alllinks">  Ver todos los enlaces</Link>

                </div>

          </div>

        </div>

      </div>

    );
  }
}

export default Stadistics;
