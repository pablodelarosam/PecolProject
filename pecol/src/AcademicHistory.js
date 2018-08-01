import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './AcademicHistory.css';
import carmen from './carmen.png' // relative path to image
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
import Signup from './Signup.js'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

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
  return { id, name, partial1, partial2, partial3, grade };
}

const data = [
  createData('La excelencia del liderazgo a través de los valores', 9.0, 9.0, 9.0, 9.0),

];



class AcademicHistory extends Component {
  constructor(props) {
    super(props);
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
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left">
            <SideBar />
          </div>

          <div className="dashboard_content">
            <div className="col-sm-12 sideBar-left">
              <h2>Historial académico</h2>
              <div className="container">
                <div class="card custom-card  ">
                  <div class="card-header text-center">
                    Historial académico
                  </div>
                  <div class="card-body">
                    <Paper className={this.props.root}>
                      <Table className={this.props.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Asignatura</TableCell>

                            <TableCell numeric>P1</TableCell>
                            <TableCell numeric>P2</TableCell>
                            <TableCell numeric>P3</TableCell>
                            <TableCell numeric>Calificación</TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {data.map(n => {
                            return (
                              <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                  {n.name}
                                </TableCell>
                                <TableCell numeric>{n.partial1}</TableCell>
                                <TableCell numeric>{n.partial2}</TableCell>
                                <TableCell numeric>{n.partial3}</TableCell>
                                <TableCell numeric>{n.grade}</TableCell>

                              </TableRow>
                            );
                          })}
                        </TableBody>

                      </Table>
                    </Paper>
                  </div>
                  <div class="card-footer text-muted">
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

export default AcademicHistory;
