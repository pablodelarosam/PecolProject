import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './CreateStudent.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import NavBarAdmin from './NavBarAdmin.js'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import './stadistics.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class Stadistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    }
  }

  componentDidMount() {

    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/getAllGrades`).then(res => {
      const rule = res.data;
      console.log("links", rule)
      this.setState({grades: rule});
      console.log("links", this.state.linkPecol)
    })

  }

  downloadStadistics = () => {

    const rows = [
      [
        "Calificacion",
        " ",
        "Nombre de actividad",
        " ",
        "Id de estudiante",
        " ",
        "Tipo de actividad"
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
        return [
          Number(key), rowArray[key]
        ];
      });

      let row = result.join(",");
      csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  render() {
    return (<div className="dashboard-top">
      <div>
        <NavBarAdmin/>
      </div>
      <div className="mainContent">
        <div className="col-sm-12">
          <div className="container stadistics">
            <h2>Estadísticas</h2>
            <div className="upload-file">

              <button onClick={this.downloadStadistics} className="btn btn-info">
                Descargar estadísticas
              </button>

              <div className="links">

                <Link to="/allstudent" className="btn btn-success">Ver todos los alumnos</Link>
                <br/>
                <br/>
                <Link to="/allteacher" className="btn btn-success">
                  Ver todos los maestros</Link>
                <br/>
                <br/>
                <Link to="/allCourses" className="btn btn-success">
                  Ver todos los cursos</Link>
                <br/>
                <br/>
                <Link to="/allmodules" className="btn btn-success">
                  Ver todos los modulos
                </Link>
                <br/>
                <br/>
                <Link to="/alllinks" className="btn btn-success">
                  Ver todos los enlaces</Link>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Stadistics;
