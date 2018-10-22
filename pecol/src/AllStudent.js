import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './AcademicHistory.css';
import './AllTeacher.css';
import carmen from './carmen.jpeg' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import Signup from './Signup.js'

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, partial1, partial2, partial3, grade) {
  id += 1;

  return {
    id,
    name,
    partial1,
    partial2,
    partial3,
    grade
  };

}

const data = [createData('La excelencia del liderazgo a través de los valores', 9.0, 9.0, 9.0, 9.0)];

class AllStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: []
    }
  }

  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://localhost:3004/allStudent`).then(res => {
      const accounts = res.data;

      this.setState({student: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
  }

  render() {
    return (<div className="dashboard-top">
      <div>
        <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <div className="row">
        <div className="col-sm-3 sideBar-left"></div>

        <div className="col-sm-12 sideBar-left">
          <h2>Estudiantes</h2>
          <div className="container">
            <div class="card custom-card  ">
              <div class="card-body">
                <Paper className={this.props.root}>
                  <Table className={this.props.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>

                        <TableCell numeric="numeric">Nombre</TableCell>
                        <TableCell numeric="numeric">Edad</TableCell>
                        <TableCell numeric="numeric">Email</TableCell>
                        <TableCell numeric="numeric">Password</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {
                        this.state.student.map(n => {
                          return (<TableRow key={n.idStudent}>
                            <TableCell component="th" scope="row">
                              {n.idstudent}
                            </TableCell>

                            <TableCell numeric="numeric">{n.nameStudent}</TableCell>
                            <TableCell numeric="numeric">{n.age}</TableCell>
                            <TableCell numeric="numeric">{n.email}</TableCell>
                            <TableCell numeric="numeric">{n.password}</TableCell>

                          </TableRow>);
                        })
                      }
                    </TableBody>

                  </Table>
                </Paper>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
        </div>

      </div>
    </div>);

  }

}

export default AllStudent;
