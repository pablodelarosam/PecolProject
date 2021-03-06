import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Grades.css';

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
function createData(name, date, grade) {
  id += 1;
  return {id, name, date, grade};
}

const data = [
  createData('Práctica 1', '10/04/2018', 7.0),
  createData('Práctica 2', '14/04/2018', 8.0),
  createData('Práctica 3', '12/04/2018', 9.0)
];

class Grades extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="dashboard-top">
        <div className="row">
          <div className="col-sm-3">
            <SideBar/>
          </div>

          <div className="col-sm-9">
            <h2>
              Mis calificaciones
            </h2>

            <div class="card custom-card">
              <div class="card-header text-center">
                La excelencia del liderazgo a través de los valores
              </div>
              <div class="card-body">

                <Paper className={this.props.root}>
                  <Table className={this.props.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Práctica</TableCell>

                        <TableCell numeric>Fecha</TableCell>
                        <TableCell numeric></TableCell>
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
                            <TableCell numeric>{n.date}</TableCell>
                            <TableCell numeric></TableCell>
                            <TableCell numeric>{n.grade}</TableCell>

                          </TableRow>
                        );
                      })}
                    </TableBody>

                  </Table>
                </Paper>

              </div>
              <div class="card-footer text-muted">
                Última actualización: Hace 2 días
              </div>
            </div>

            <div class="card custom-card">
              <div class="card-header text-center">
                La excelencia del liderazgo a través de los valores
              </div>
              <div class="card-body">
                <Paper className={this.props.root}>
                  <Table className={this.props.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Práctica</TableCell>

                        <TableCell numeric>Fecha</TableCell>
                        <TableCell numeric></TableCell>
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
                            <TableCell numeric>{n.date}</TableCell>
                            <TableCell numeric></TableCell>
                            <TableCell numeric>{n.grade}</TableCell>

                          </TableRow>
                        );
                      })}
                    </TableBody>

                  </Table>
                </Paper>
              </div>
              <div class="card-footer text-muted">
                Última actualización: Hace 2 días
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Grades;
