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
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class Stadistics extends Component {
  constructor(props) {
    super(props);
  }

  downloadStadistics = () => {
    const rows = [
      [
        "Total alumnos", "Usuarios activos esta semana ", "some other info"
      ],
      ["15", "5", "more info"]
    ];
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
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

            <Link className="custom-link" to="/definition">Agregar módulo
            </Link>

            <Link className="custom-link" to="/createTeacher">Agregar profesor
            </Link>

            <Link className="custom-link" to="/createRule">Agregar regla
            </Link>

            <Link className="custom-link" to="/stadistics">Estadísticas
            </Link>

          </nav>
        </div>

        <div className="container stadistics">
          <h2>Estadísticas</h2>

          <button onClick={this.downloadStadistics}>
            Descargar estadísticas
          </button>

        </div>

      </div>

    );
  }
}

export default Stadistics;
